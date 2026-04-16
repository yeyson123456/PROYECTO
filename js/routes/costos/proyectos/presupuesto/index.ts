import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
import acus from './acus'
import gastosFijos from './gastos-fijos'
import gastosFijosGlobal from './gastos-fijos-global'
import ggfijosMontoCg from './ggfijos-monto-cg'
import supervisionGgDetalle from './supervision-gg-detalle'
import exportMethod9280c6 from './export'
import consolidado from './consolidado'
import params from './params'
import insumos from './insumos'
/**
* @see \App\Http\Controllers\PresupuestoController::importMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
export const importMetrado = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMetrado.url(args, options),
    method: 'post',
})

importMetrado.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/import-metrado',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::importMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
importMetrado.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return importMetrado.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::importMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
importMetrado.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMetrado.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::importMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
    const importMetradoForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMetrado.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::importMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
        importMetradoForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMetrado.url(args, options),
            method: 'post',
        })
    
    importMetrado.form = importMetradoForm
/**
* @see \App\Http\Controllers\PresupuestoController::importBatchMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
export const importBatchMetrados = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importBatchMetrados.url(args, options),
    method: 'post',
})

importBatchMetrados.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/import-batch-metrados',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::importBatchMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
importBatchMetrados.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return importBatchMetrados.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::importBatchMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
importBatchMetrados.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importBatchMetrados.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::importBatchMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
    const importBatchMetradosForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importBatchMetrados.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::importBatchMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
        importBatchMetradosForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importBatchMetrados.url(args, options),
            method: 'post',
        })
    
    importBatchMetrados.form = importBatchMetradosForm
/**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
export const exportMethod = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
exportMethod.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return exportMethod.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
exportMethod.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
exportMethod.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
    const exportMethodForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
        exportMethodForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::exportMethod
 * @see app/Http/Controllers/PresupuestoController.php:1593
 * @route '/costos/proyectos/{project}/presupuesto/export'
 */
        exportMethodForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
/**
* @see \App\Http\Controllers\PresupuestoController::copy
 * @see app/Http/Controllers/PresupuestoController.php:2747
 * @route '/costos/proyectos/{project}/presupuesto/copy'
 */
export const copy = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: copy.url(args, options),
    method: 'post',
})

copy.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/copy',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::copy
 * @see app/Http/Controllers/PresupuestoController.php:2747
 * @route '/costos/proyectos/{project}/presupuesto/copy'
 */
copy.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return copy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::copy
 * @see app/Http/Controllers/PresupuestoController.php:2747
 * @route '/costos/proyectos/{project}/presupuesto/copy'
 */
copy.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: copy.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::copy
 * @see app/Http/Controllers/PresupuestoController.php:2747
 * @route '/costos/proyectos/{project}/presupuesto/copy'
 */
    const copyForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: copy.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::copy
 * @see app/Http/Controllers/PresupuestoController.php:2747
 * @route '/costos/proyectos/{project}/presupuesto/copy'
 */
        copyForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: copy.url(args, options),
            method: 'post',
        })
    
    copy.form = copyForm
/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
export const index = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/{subsection?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
index.url = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    subsection: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "subsection",
        ])

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                subsection: args.subsection,
                }

    return index.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{subsection?}', parsedArgs.subsection?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
index.get = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
index.head = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
    const indexForm = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
        indexForm.get = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:77
 * @route '/costos/proyectos/{project}/presupuesto/{subsection?}'
 */
        indexForm.head = (args: { project: number | { id: number }, subsection?: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
export const show = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/{subsection}/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
show.url = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    subsection: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                subsection: args.subsection,
                }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{subsection}', parsedArgs.subsection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
show.get = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
show.head = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
    const showForm = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
        showForm.get = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:114
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/data'
 */
        showForm.head = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:137
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}'
 */
export const update = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/costos/proyectos/{project}/presupuesto/{subsection}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:137
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}'
 */
update.url = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    subsection: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                subsection: args.subsection,
                }

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{subsection}', parsedArgs.subsection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:137
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}'
 */
update.patch = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:137
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}'
 */
    const updateForm = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:137
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}'
 */
        updateForm.patch = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PresupuestoController::deleteRow
 * @see app/Http/Controllers/PresupuestoController.php:1502
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row'
 */
export const deleteRow = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteRow.url(args, options),
    method: 'delete',
})

deleteRow.definition = {
    methods: ["delete"],
    url: '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PresupuestoController::deleteRow
 * @see app/Http/Controllers/PresupuestoController.php:1502
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row'
 */
deleteRow.url = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    subsection: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                subsection: args.subsection,
                }

    return deleteRow.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{subsection}', parsedArgs.subsection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::deleteRow
 * @see app/Http/Controllers/PresupuestoController.php:1502
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row'
 */
deleteRow.delete = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteRow.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::deleteRow
 * @see app/Http/Controllers/PresupuestoController.php:1502
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row'
 */
    const deleteRowForm = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteRow.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::deleteRow
 * @see app/Http/Controllers/PresupuestoController.php:1502
 * @route '/costos/proyectos/{project}/presupuesto/{subsection}/delete-row'
 */
        deleteRowForm.delete = (args: { project: number | { id: number }, subsection: string | number } | [project: number | { id: number }, subsection: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteRow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteRow.form = deleteRowForm
const presupuesto = {
    importMetrado: Object.assign(importMetrado, importMetrado),
importBatchMetrados: Object.assign(importBatchMetrados, importBatchMetrados),
acus: Object.assign(acus, acus),
gastosFijos: Object.assign(gastosFijos, gastosFijos),
gastosFijosGlobal: Object.assign(gastosFijosGlobal, gastosFijosGlobal),
ggfijosMontoCg: Object.assign(ggfijosMontoCg, ggfijosMontoCg),
supervisionGgDetalle: Object.assign(supervisionGgDetalle, supervisionGgDetalle),
export: Object.assign(exportMethod, exportMethod9280c6),
consolidado: Object.assign(consolidado, consolidado),
params: Object.assign(params, params),
insumos: Object.assign(insumos, insumos),
copy: Object.assign(copy, copy),
index: Object.assign(index, index),
show: Object.assign(show, show),
update: Object.assign(update, update),
deleteRow: Object.assign(deleteRow, deleteRow),
}

export default presupuesto