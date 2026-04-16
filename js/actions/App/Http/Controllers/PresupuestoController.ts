import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PresupuestoController::importFromMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
export const importFromMetrado = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importFromMetrado.url(args, options),
    method: 'post',
})

importFromMetrado.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/import-metrado',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::importFromMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
importFromMetrado.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return importFromMetrado.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::importFromMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
importFromMetrado.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importFromMetrado.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::importFromMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
    const importFromMetradoForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importFromMetrado.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::importFromMetrado
 * @see app/Http/Controllers/PresupuestoController.php:529
 * @route '/costos/proyectos/{project}/presupuesto/import-metrado'
 */
        importFromMetradoForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importFromMetrado.url(args, options),
            method: 'post',
        })
    
    importFromMetrado.form = importFromMetradoForm
/**
* @see \App\Http\Controllers\PresupuestoController::importBatchFromMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
export const importBatchFromMetrados = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importBatchFromMetrados.url(args, options),
    method: 'post',
})

importBatchFromMetrados.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/import-batch-metrados',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::importBatchFromMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
importBatchFromMetrados.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return importBatchFromMetrados.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::importBatchFromMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
importBatchFromMetrados.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importBatchFromMetrados.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::importBatchFromMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
    const importBatchFromMetradosForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importBatchFromMetrados.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::importBatchFromMetrados
 * @see app/Http/Controllers/PresupuestoController.php:687
 * @route '/costos/proyectos/{project}/presupuesto/import-batch-metrados'
 */
        importBatchFromMetradosForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importBatchFromMetrados.url(args, options),
            method: 'post',
        })
    
    importBatchFromMetrados.form = importBatchFromMetradosForm
/**
* @see \App\Http\Controllers\PresupuestoController::calculateACU
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
export const calculateACU = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculateACU.url(args, options),
    method: 'post',
})

calculateACU.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/acus/calculate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::calculateACU
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
calculateACU.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return calculateACU.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::calculateACU
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
calculateACU.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculateACU.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::calculateACU
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
    const calculateACUForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: calculateACU.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::calculateACU
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
        calculateACUForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: calculateACU.url(args, options),
            method: 'post',
        })
    
    calculateACU.form = calculateACUForm
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
export const getGGFijoDesagregado = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijoDesagregado.url(args, options),
    method: 'get',
})

getGGFijoDesagregado.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
getGGFijoDesagregado.url = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    ggFijoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                ggFijoId: args.ggFijoId,
                }

    return getGGFijoDesagregado.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ggFijoId}', parsedArgs.ggFijoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
getGGFijoDesagregado.get = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijoDesagregado.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
getGGFijoDesagregado.head = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getGGFijoDesagregado.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
    const getGGFijoDesagregadoForm = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getGGFijoDesagregado.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        getGGFijoDesagregadoForm.get = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijoDesagregado.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        getGGFijoDesagregadoForm.head = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijoDesagregado.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getGGFijoDesagregado.form = getGGFijoDesagregadoForm
/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
export const saveGGFijoDesagregado = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijoDesagregado.url(args, options),
    method: 'post',
})

saveGGFijoDesagregado.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
saveGGFijoDesagregado.url = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    ggFijoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                ggFijoId: args.ggFijoId,
                }

    return saveGGFijoDesagregado.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ggFijoId}', parsedArgs.ggFijoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
saveGGFijoDesagregado.post = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijoDesagregado.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
    const saveGGFijoDesagregadoForm = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveGGFijoDesagregado.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregado
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        saveGGFijoDesagregadoForm.post = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveGGFijoDesagregado.url(args, options),
            method: 'post',
        })
    
    saveGGFijoDesagregado.form = saveGGFijoDesagregadoForm
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
export const getGGFijosTotals = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijosTotals.url(args, options),
    method: 'get',
})

getGGFijosTotals.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
getGGFijosTotals.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getGGFijosTotals.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
getGGFijosTotals.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijosTotals.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
getGGFijosTotals.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getGGFijosTotals.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
    const getGGFijosTotalsForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getGGFijosTotals.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
        getGGFijosTotalsForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijosTotals.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosTotals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
        getGGFijosTotalsForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijosTotals.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getGGFijosTotals.form = getGGFijosTotalsForm
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
export const getGGFijoDesagregadoGlobal = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijoDesagregadoGlobal.url(args, options),
    method: 'get',
})

getGGFijoDesagregadoGlobal.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
getGGFijoDesagregadoGlobal.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getGGFijoDesagregadoGlobal.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
getGGFijoDesagregadoGlobal.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijoDesagregadoGlobal.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
getGGFijoDesagregadoGlobal.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getGGFijoDesagregadoGlobal.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
    const getGGFijoDesagregadoGlobalForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getGGFijoDesagregadoGlobal.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
        getGGFijoDesagregadoGlobalForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijoDesagregadoGlobal.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1191
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
        getGGFijoDesagregadoGlobalForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijoDesagregadoGlobal.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getGGFijoDesagregadoGlobal.form = getGGFijoDesagregadoGlobalForm
/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1248
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
export const saveGGFijoDesagregadoGlobal = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijoDesagregadoGlobal.url(args, options),
    method: 'post',
})

saveGGFijoDesagregadoGlobal.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1248
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
saveGGFijoDesagregadoGlobal.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return saveGGFijoDesagregadoGlobal.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1248
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
saveGGFijoDesagregadoGlobal.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijoDesagregadoGlobal.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1248
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
    const saveGGFijoDesagregadoGlobalForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveGGFijoDesagregadoGlobal.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijoDesagregadoGlobal
 * @see app/Http/Controllers/PresupuestoController.php:1248
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/desagregado'
 */
        saveGGFijoDesagregadoGlobalForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveGGFijoDesagregadoGlobal.url(args, options),
            method: 'post',
        })
    
    saveGGFijoDesagregadoGlobal.form = saveGGFijoDesagregadoGlobalForm
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
export const getGGFijosMontoCG = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijosMontoCG.url(args, options),
    method: 'get',
})

getGGFijosMontoCG.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
getGGFijosMontoCG.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getGGFijosMontoCG.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
getGGFijosMontoCG.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getGGFijosMontoCG.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
getGGFijosMontoCG.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getGGFijosMontoCG.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
    const getGGFijosMontoCGForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getGGFijosMontoCG.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
        getGGFijosMontoCGForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijosMontoCG.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1342
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
        getGGFijosMontoCGForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getGGFijosMontoCG.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getGGFijosMontoCG.form = getGGFijosMontoCGForm
/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1371
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
export const saveGGFijosMontoCG = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijosMontoCG.url(args, options),
    method: 'post',
})

saveGGFijosMontoCG.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1371
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
saveGGFijosMontoCG.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return saveGGFijosMontoCG.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1371
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
saveGGFijosMontoCG.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveGGFijosMontoCG.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1371
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
    const saveGGFijosMontoCGForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveGGFijosMontoCG.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::saveGGFijosMontoCG
 * @see app/Http/Controllers/PresupuestoController.php:1371
 * @route '/costos/proyectos/{project}/presupuesto/ggfijos-monto-cg'
 */
        saveGGFijosMontoCGForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveGGFijosMontoCG.url(args, options),
            method: 'post',
        })
    
    saveGGFijosMontoCG.form = saveGGFijosMontoCGForm
/**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
export const getSupervisionGGDetalle = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSupervisionGGDetalle.url(args, options),
    method: 'get',
})

getSupervisionGGDetalle.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
getSupervisionGGDetalle.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getSupervisionGGDetalle.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
getSupervisionGGDetalle.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSupervisionGGDetalle.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
getSupervisionGGDetalle.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSupervisionGGDetalle.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
    const getSupervisionGGDetalleForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getSupervisionGGDetalle.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
        getSupervisionGGDetalleForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSupervisionGGDetalle.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2381
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
        getSupervisionGGDetalleForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSupervisionGGDetalle.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getSupervisionGGDetalle.form = getSupervisionGGDetalleForm
/**
* @see \App\Http\Controllers\PresupuestoController::saveSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2418
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
export const saveSupervisionGGDetalle = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: saveSupervisionGGDetalle.url(args, options),
    method: 'patch',
})

saveSupervisionGGDetalle.definition = {
    methods: ["patch"],
    url: '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PresupuestoController::saveSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2418
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
saveSupervisionGGDetalle.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return saveSupervisionGGDetalle.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::saveSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2418
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
saveSupervisionGGDetalle.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: saveSupervisionGGDetalle.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::saveSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2418
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
    const saveSupervisionGGDetalleForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveSupervisionGGDetalle.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::saveSupervisionGGDetalle
 * @see app/Http/Controllers/PresupuestoController.php:2418
 * @route '/costos/proyectos/{project}/presupuesto/supervision-gg-detalle'
 */
        saveSupervisionGGDetalleForm.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveSupervisionGGDetalle.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    saveSupervisionGGDetalle.form = saveSupervisionGGDetalleForm
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
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
export const exportExcel = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(args, options),
    method: 'get',
})

exportExcel.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/export/excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
exportExcel.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return exportExcel.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
exportExcel.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
exportExcel.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportExcel.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
    const exportExcelForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportExcel.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
        exportExcelForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportExcel.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::exportExcel
 * @see app/Http/Controllers/PresupuestoController.php:2548
 * @route '/costos/proyectos/{project}/presupuesto/export/excel'
 */
        exportExcelForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportExcel.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportExcel.form = exportExcelForm
/**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
export const exportPdf = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})

exportPdf.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/export/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
exportPdf.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return exportPdf.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
exportPdf.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
exportPdf.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
    const exportPdfForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
        exportPdfForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::exportPdf
 * @see app/Http/Controllers/PresupuestoController.php:2584
 * @route '/costos/proyectos/{project}/presupuesto/export/pdf'
 */
        exportPdfForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportPdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportPdf.form = exportPdfForm
/**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
export const getConsolidadoSnapshot = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConsolidadoSnapshot.url(args, options),
    method: 'get',
})

getConsolidadoSnapshot.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/consolidado/snapshot',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
getConsolidadoSnapshot.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getConsolidadoSnapshot.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
getConsolidadoSnapshot.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConsolidadoSnapshot.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
getConsolidadoSnapshot.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConsolidadoSnapshot.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
    const getConsolidadoSnapshotForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getConsolidadoSnapshot.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        getConsolidadoSnapshotForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConsolidadoSnapshot.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        getConsolidadoSnapshotForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConsolidadoSnapshot.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getConsolidadoSnapshot.form = getConsolidadoSnapshotForm
/**
* @see \App\Http\Controllers\PresupuestoController::saveConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
export const saveConsolidadoSnapshot = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: saveConsolidadoSnapshot.url(args, options),
    method: 'patch',
})

saveConsolidadoSnapshot.definition = {
    methods: ["patch"],
    url: '/costos/proyectos/{project}/presupuesto/consolidado/snapshot',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PresupuestoController::saveConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
saveConsolidadoSnapshot.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return saveConsolidadoSnapshot.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::saveConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
saveConsolidadoSnapshot.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: saveConsolidadoSnapshot.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::saveConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
    const saveConsolidadoSnapshotForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveConsolidadoSnapshot.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::saveConsolidadoSnapshot
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        saveConsolidadoSnapshotForm.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveConsolidadoSnapshot.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    saveConsolidadoSnapshot.form = saveConsolidadoSnapshotForm
/**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
export const getProjectParams = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectParams.url(args, options),
    method: 'get',
})

getProjectParams.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/params',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
getProjectParams.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getProjectParams.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
getProjectParams.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectParams.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
getProjectParams.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProjectParams.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
    const getProjectParamsForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getProjectParams.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
        getProjectParamsForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProjectParams.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1434
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
        getProjectParamsForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProjectParams.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getProjectParams.form = getProjectParamsForm
/**
* @see \App\Http\Controllers\PresupuestoController::updateProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1455
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
export const updateProjectParams = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProjectParams.url(args, options),
    method: 'patch',
})

updateProjectParams.definition = {
    methods: ["patch"],
    url: '/costos/proyectos/{project}/presupuesto/params',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PresupuestoController::updateProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1455
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
updateProjectParams.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateProjectParams.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::updateProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1455
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
updateProjectParams.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProjectParams.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::updateProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1455
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
    const updateProjectParamsForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProjectParams.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::updateProjectParams
 * @see app/Http/Controllers/PresupuestoController.php:1455
 * @route '/costos/proyectos/{project}/presupuesto/params'
 */
        updateProjectParamsForm.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProjectParams.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateProjectParams.form = updateProjectParamsForm
/**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
export const getAcuComponentes = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAcuComponentes.url(args, options),
    method: 'get',
})

getAcuComponentes.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
getAcuComponentes.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                }

    return getAcuComponentes.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
getAcuComponentes.get = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAcuComponentes.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
getAcuComponentes.head = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAcuComponentes.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
    const getAcuComponentesForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAcuComponentes.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        getAcuComponentesForm.get = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAcuComponentes.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::getAcuComponentes
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        getAcuComponentesForm.head = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAcuComponentes.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAcuComponentes.form = getAcuComponentesForm
/**
* @see \App\Http\Controllers\PresupuestoController::storeAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
export const storeAcuComponente = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAcuComponente.url(args, options),
    method: 'post',
})

storeAcuComponente.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::storeAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
storeAcuComponente.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                }

    return storeAcuComponente.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::storeAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
storeAcuComponente.post = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAcuComponente.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::storeAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
    const storeAcuComponenteForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeAcuComponente.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::storeAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        storeAcuComponenteForm.post = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeAcuComponente.url(args, options),
            method: 'post',
        })
    
    storeAcuComponente.form = storeAcuComponenteForm
/**
* @see \App\Http\Controllers\PresupuestoController::updateAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
export const updateAcuComponente = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAcuComponente.url(args, options),
    method: 'put',
})

updateAcuComponente.definition = {
    methods: ["put"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PresupuestoController::updateAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
updateAcuComponente.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                    id: args[3],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                                id: args.id,
                }

    return updateAcuComponente.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::updateAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
updateAcuComponente.put = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAcuComponente.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::updateAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
    const updateAcuComponenteForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateAcuComponente.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::updateAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
        updateAcuComponenteForm.put = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateAcuComponente.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateAcuComponente.form = updateAcuComponenteForm
/**
* @see \App\Http\Controllers\PresupuestoController::destroyAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
export const destroyAcuComponente = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyAcuComponente.url(args, options),
    method: 'delete',
})

destroyAcuComponente.definition = {
    methods: ["delete"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PresupuestoController::destroyAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
destroyAcuComponente.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                    id: args[3],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                                id: args.id,
                }

    return destroyAcuComponente.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::destroyAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
destroyAcuComponente.delete = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyAcuComponente.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::destroyAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
    const destroyAcuComponenteForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyAcuComponente.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::destroyAcuComponente
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
        destroyAcuComponenteForm.delete = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyAcuComponente.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyAcuComponente.form = destroyAcuComponenteForm
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
const PresupuestoController = { importFromMetrado, importBatchFromMetrados, calculateACU, getGGFijoDesagregado, saveGGFijoDesagregado, getGGFijosTotals, getGGFijoDesagregadoGlobal, saveGGFijoDesagregadoGlobal, getGGFijosMontoCG, saveGGFijosMontoCG, getSupervisionGGDetalle, saveSupervisionGGDetalle, exportMethod, exportExcel, exportPdf, getConsolidadoSnapshot, saveConsolidadoSnapshot, getProjectParams, updateProjectParams, getAcuComponentes, storeAcuComponente, updateAcuComponente, destroyAcuComponente, copy, index, show, update, deleteRow, export: exportMethod }

export default PresupuestoController