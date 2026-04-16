import React, { useState } from 'react';
import type { SelectedSections } from './types';
import { SECTION_LABELS } from './types';

interface Props {
    show: boolean;
    selectedSections: SelectedSections;
    onSelectedChange: (sections: SelectedSections) => void;
    onClose: () => void;
    getData: () => any[];
    showNotification: (type: 'success' | 'error' | 'warning', msg: string) => void;
    proyecto?: any;
}

const EttpWordModal: React.FC<Props> = ({
    show,
    selectedSections,
    onSelectedChange,
    onClose,
    getData,
    showNotification,
    proyecto,
}) => {
    const [generating, setGenerating] = useState(false);

    if (!show) return null;

    // ─── FILTRADO POR SECCIÓN ─────
    const filterTreeData = (data: any[], sectionName: string): any[] => {
        if (!data || !Array.isArray(data)) return [];

        const sectionKeywords: Record<string, string[]> = {
            'ESTRUCTURAS': ['estructura', 'concreto', 'acero', 'cimentación', 'columna', 'viga'],
            'ARQUITECTURA': ['arquitectura', 'acabado', 'piso', 'cielorraso', 'tabique', 'revoque'],
            'INSTALACIONES SANITARIAS': ['sanitaria', 'agua', 'desagüe', 'tubería', 'cisterna', 'tanque'],
            'INSTALACIONES ELECTRICAS': ['eléctrica', 'eléctrico', 'electricas', 'alumbrado', 'tomacorriente', 'tablero'],
            'INSTALACIONES DE COMUNICACIONES': ['comunicacion', 'comunicaciones', 'datos', 'teléfono', 'red'],
            'INSTALACIONES DE GAS': ['gas', 'gasfitería', 'tubería de gas'],
        };

        const keywords = sectionKeywords[sectionName] || [];

        const filterItems = (items: any[]): any[] => {
            if (!items) return [];
            return items.reduce((acc: any[], item: any) => {
                const descripcion = (item.descripcion || '').toLowerCase();
                const itemCode = (item.item || '').toLowerCase();
                const matches = keywords.some(kw =>
                    descripcion.includes(kw.toLowerCase()) || itemCode.includes(kw.toLowerCase())
                );

                if (matches) {
                    acc.push({ ...item });
                } else if (item._children?.length) {
                    const filtered = filterItems(item._children);
                    if (filtered.length > 0) acc.push({ ...item, _children: filtered });
                }
                return acc;
            }, []);
        };

        return filterItems(data);
    };

    // ─── HELPERS WORD ─────
    const sinBordes = (docx: any) => ({
        top: { style: docx.BorderStyle.NONE },
        bottom: { style: docx.BorderStyle.NONE },
        left: { style: docx.BorderStyle.NONE },
        right: { style: docx.BorderStyle.NONE },
    });

    // ─── DETECCIÓN DE NIVEL POR NUMERACIÓN ─────
    const detectHeadingLevel = (itemNumber: string): number => {
        if (!itemNumber) return 3;
        const dotCount = (itemNumber.match(/\./g) || []).length;
        switch (dotCount) {
            case 0: return 1; 
            case 1: return 2; 
            default: return 3; 
        }
    };

    // ─── CONSTRUCCIÓN DE ÍNDICE ─────
    const buildTableOfContents = (items: any[]): any[] => {
        const sections: any[] = [];
        const toc: { level: number; text: string; item: string }[] = [];

        const traverse = (items: any[]) => {
            items?.forEach((item) => {
                if (item?.item && item?.descripcion) {
                    const level = detectHeadingLevel(item.item);
                    toc.push({
                        level,
                        text: `${item.item} ${item.descripcion}`.trim(),
                        item: item.item,
                    });
                    if (item._children?.length) traverse(item._children);
                }
            });
        };

        traverse(items);

        sections.push(
            new (window as any).docx.Paragraph({
                children: [new (window as any).docx.TextRun({
                    text: 'Contenido',
                    bold: true,
                    font: 'Arial',
                    size: 28,
                    color: '#000000',
                })],
                alignment: (window as any).docx.AlignmentType.LEFT,
                spacing: { after: 300, line: 480 },
            })
        );

        let pageCounter = 3; 
        toc.forEach((entry, index) => {
            const indent = (entry.level - 1) * 720;
            const tabStopPosition = 9144; 

            sections.push(
                new (window as any).docx.Paragraph({
                    children: [
                        new (window as any).docx.TextRun({
                            text: entry.text,
                            font: 'Arial',
                            size: entry.level === 1 ? 24 : 22,
                            color: '#000000',
                            bold: entry.level === 1,
                        }),
                        new (window as any).docx.TextRun({ text: '\t' }),
                        new (window as any).docx.TextRun({
                            text: String(pageCounter),
                            font: 'Arial',
                            size: entry.level === 1 ? 24 : 22,
                            color: '#000000',
                            bold: entry.level === 1,
                        }),
                    ],
                    indent: { left: indent, right: 0 },
                    tabStops: [
                        {
                            type: (window as any).docx.TabStopType.RIGHT,
                            position: tabStopPosition,
                            fill: (window as any).docx.TabStopFillType.DOT,
                        },
                    ],
                    spacing: { after: 80, line: 360 },
                })
            );

            if (entry.level === 1 && index > 0) pageCounter += 1;
        });

        return sections;
    };

    const procesarContenido = async (docx: any, contenido: string) => {
        if (!contenido) return [];
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = contenido;
        const elementos: any[] = [];

        const procesarBloque = async (nodoBloque: HTMLElement) => {
            const runs: any[] = [];
            const procesarInline = async (nodo: Node) => {
                if (nodo.nodeType === Node.TEXT_NODE) {
                    if (nodo.textContent?.trim() !== '') {
                        runs.push(new docx.TextRun({ text: nodo.textContent?.replace(/\s+/g, ' ') || '', font: "Arial Narrow", size: 24, color: "#000000" }));
                    }
                } else if (nodo.nodeType === Node.ELEMENT_NODE) {
                    const el = nodo as HTMLElement;
                    if (el.tagName === 'IMG') {
                        const src = el.getAttribute('src');
                        if (src) {
                            let dataStr = "";
                            if (src.startsWith('data:image')) {
                                dataStr = src.split(',')[1] || "";
                            }
                            if (dataStr) {
                                runs.push(new docx.ImageRun({
                                    data: dataStr,
                                    transformation: { width: 200, height: 200 },
                                }));
                            }
                        }
                    } else if (el.tagName !== 'BR') {
                        for (const child of Array.from(nodo.childNodes)) {
                            await procesarInline(child);
                        }
                    }
                }
            };

            for (const child of Array.from(nodoBloque.childNodes)) {
                await procesarInline(child);
            }

            if (runs.length > 0) {
                elementos.push(new docx.Paragraph({
                    alignment: docx.AlignmentType.BOTH,
                    children: runs,
                    spacing: { after: 200, line: 480 },
                    indent: { left: 720 },
                }));
            }
        };

        for (const child of Array.from(tempDiv.childNodes)) {
            if (child.nodeType === Node.ELEMENT_NODE) await procesarBloque(child as HTMLElement);
        }

        return elementos;
    };

    const processHierarchicalItems = async (docx: any, items: any[], sections: any[]) => {
        if (!items?.length) return;

        for (const item of items) {
            const headingLevel = detectHeadingLevel(item.item);
            sections.push(new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `${item.item || ''} ${item.descripcion || ''}`.trim(),
                    bold: true,
                    font: 'Arial Narrow',
                    color: '#000000',
                    size: headingLevel === 1 ? 28 : headingLevel === 2 ? 26 : 24,
                })],
                heading: headingLevel === 1 ? docx.HeadingLevel.HEADING_1 : headingLevel === 2 ? docx.HeadingLevel.HEADING_2 : docx.HeadingLevel.HEADING_3,
                spacing: { before: 300, after: 100, line: 480 },
            }));

            if (item.secciones?.length) {
                for (const sec of item.secciones) {
                    const parsed = await procesarContenido(docx, sec.contenido);
                    sections.push(...parsed);
                }
            }

            if (item._children?.length) {
                await processHierarchicalItems(docx, item._children, sections);
            }
        }
    };

    const fetchImageAsDataURL = async (url: string): Promise<string | null> => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(blob);
            });
        } catch { return null; }
    };

    const generarWordParaSeccion = async (docx: any, datosFiltrados: any[], nombreArchivo: string) => {
        const logoFile = (document.getElementById('logoFile') as HTMLInputElement)?.files?.[0];
        let logoUrl = proyecto?.plantilla_logo_izq_url ? await fetchImageAsDataURL(proyecto.plantilla_logo_izq_url) : null;

        const header = new docx.Header({
            children: [
                new docx.Paragraph({ text: "ESPECIFICACIONES TÉCNICAS", alignment: docx.AlignmentType.CENTER })
            ],
        });

        const footer = new docx.Footer({
            children: [
                new docx.Paragraph({
                    alignment: docx.AlignmentType.RIGHT,
                    children: [
                        new docx.TextRun({ text: "Página " }),
                        new docx.TextRun({ children: [docx.PageNumber.CURRENT] }),
                    ],
                }),
            ],
        });

        const tocSections = buildTableOfContents(datosFiltrados);
        const contentSections: any[] = [];
        await processHierarchicalItems(docx, datosFiltrados, contentSections);

        const doc = new docx.Document({
            sections: [
                {
                    properties: { type: docx.SectionType.NEW_PAGE },
                    headers: { default: header },
                    footers: { default: footer },
                    children: [new docx.Paragraph({ text: `ESPECIFICACIONES - ${nombreArchivo}`, heading: docx.HeadingLevel.HEADING_1 })]
                },
                {
                    properties: { type: docx.SectionType.NEW_PAGE },
                    children: tocSections
                },
                {
                    properties: { type: docx.SectionType.CONTINUOUS },
                    children: contentSections
                },
            ],
        });

        const blob = await docx.Packer.toBlob(doc);
        const { saveAs } = await import('file-saver');
        saveAs(blob, `ET_${nombreArchivo}.docx`);
    };

    const handleGenerate = () => {
        const docx = (window as any).docx;
        const selectedKeys = Object.entries(selectedSections).filter(([_, v]) => v).map(([k]) => SECTION_LABELS[k]);
        if (!selectedKeys.length) return showNotification('error', 'Seleccione una sección');

        setGenerating(true);
        Promise.all(selectedKeys.map(async seccion => {
            const filtered = filterTreeData(getData(), seccion);
            if (filtered.length > 0) await generarWordParaSeccion(docx, filtered, seccion);
        })).finally(() => {
            setGenerating(false);
            onClose();
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-lg w-full max-w-md mx-4" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <h2 className="text-lg font-bold mb-4">Generar Word</h2>
                    <div className="space-y-2">
                        {Object.entries(selectedSections).map(([key, value]) => (
                            <label key={key} className="flex items-center gap-2">
                                <input type="checkbox" checked={value} onChange={e => onSelectedChange({ ...selectedSections, [key]: e.target.checked })} />
                                <span className="capitalize">{key}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end gap-2">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleGenerate} className="bg-blue-600 text-white px-4 py-2 rounded">{generating ? '...' : 'Generar'}</button>
                </div>
            </div>
        </div>
    );
};

export default EttpWordModal;