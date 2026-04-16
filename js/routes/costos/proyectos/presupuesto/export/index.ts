import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
export const excel = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(args, options),
    method: 'get',
})

excel.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
excel.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { project: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                }

    return excel.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
excel.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excel.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
excel.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excel.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
    const excelForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: excel.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
        excelForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: excel.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::excel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
        excelForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: excel.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    excel.form = excelForm
/**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
export const pdf = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
pdf.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { project: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                }

    return pdf.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
pdf.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
pdf.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
    const pdfForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
        pdfForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::pdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
        pdfForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pdf.form = pdfForm
const exportMethod = {
    excel: Object.assign(excel, excel),
pdf: Object.assign(pdf, pdf),
}

export default exportMethod