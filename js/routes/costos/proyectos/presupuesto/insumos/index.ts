import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
export const search = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
search.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return search.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
search.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
search.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
    const searchForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
        searchForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InsumoProductoController::search
 * @see app/Http/Controllers/InsumoProductoController.php:55
 * @route '/costos/proyectos/{project}/presupuesto/insumos/search'
 */
        searchForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
export const especialidades = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: especialidades.url(args, options),
    method: 'get',
})

especialidades.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/especialidades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
especialidades.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return especialidades.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
especialidades.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: especialidades.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
especialidades.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: especialidades.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
    const especialidadesForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: especialidades.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
        especialidadesForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: especialidades.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InsumoProductoController::especialidades
 * @see app/Http/Controllers/InsumoProductoController.php:249
 * @route '/costos/proyectos/{project}/presupuesto/insumos/especialidades'
 */
        especialidadesForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: especialidades.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    especialidades.form = especialidadesForm
/**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
export const diccionarios = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: diccionarios.url(args, options),
    method: 'get',
})

diccionarios.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/diccionarios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
diccionarios.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return diccionarios.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
diccionarios.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: diccionarios.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
diccionarios.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: diccionarios.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
    const diccionariosForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: diccionarios.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
        diccionariosForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: diccionarios.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InsumoProductoController::diccionarios
 * @see app/Http/Controllers/InsumoProductoController.php:288
 * @route '/costos/proyectos/{project}/presupuesto/insumos/diccionarios'
 */
        diccionariosForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: diccionarios.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    diccionarios.form = diccionariosForm
/**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
export const unidades = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unidades.url(args, options),
    method: 'get',
})

unidades.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/unidades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
unidades.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return unidades.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
unidades.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unidades.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
unidades.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unidades.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
    const unidadesForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unidades.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
        unidadesForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unidades.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InsumoProductoController::unidades
 * @see app/Http/Controllers/InsumoProductoController.php:305
 * @route '/costos/proyectos/{project}/presupuesto/insumos/unidades'
 */
        unidadesForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unidades.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unidades.form = unidadesForm
/**
* @see \App\Http\Controllers\InsumoProductoController::store
 * @see app/Http/Controllers/InsumoProductoController.php:322
 * @route '/costos/proyectos/{project}/presupuesto/insumos'
 */
export const store = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/insumos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::store
 * @see app/Http/Controllers/InsumoProductoController.php:322
 * @route '/costos/proyectos/{project}/presupuesto/insumos'
 */
store.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return store.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::store
 * @see app/Http/Controllers/InsumoProductoController.php:322
 * @route '/costos/proyectos/{project}/presupuesto/insumos'
 */
store.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::store
 * @see app/Http/Controllers/InsumoProductoController.php:322
 * @route '/costos/proyectos/{project}/presupuesto/insumos'
 */
    const storeForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::store
 * @see app/Http/Controllers/InsumoProductoController.php:322
 * @route '/costos/proyectos/{project}/presupuesto/insumos'
 */
        storeForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\InsumoProductoController::replace
 * @see app/Http/Controllers/InsumoProductoController.php:447
 * @route '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo'
 */
export const replace = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(args, options),
    method: 'post',
})

replace.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::replace
 * @see app/Http/Controllers/InsumoProductoController.php:447
 * @route '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo'
 */
replace.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return replace.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::replace
 * @see app/Http/Controllers/InsumoProductoController.php:447
 * @route '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo'
 */
replace.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: replace.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::replace
 * @see app/Http/Controllers/InsumoProductoController.php:447
 * @route '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo'
 */
    const replaceForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: replace.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::replace
 * @see app/Http/Controllers/InsumoProductoController.php:447
 * @route '/costos/proyectos/{project}/presupuesto/insumos/replace-project-insumo'
 */
        replaceForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: replace.url(args, options),
            method: 'post',
        })
    
    replace.form = replaceForm
/**
* @see \App\Http\Controllers\InsumoProductoController::seed
 * @see app/Http/Controllers/InsumoProductoController.php:20
 * @route '/costos/proyectos/{project}/presupuesto/insumos/seed'
 */
export const seed = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: seed.url(args, options),
    method: 'post',
})

seed.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/seed',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::seed
 * @see app/Http/Controllers/InsumoProductoController.php:20
 * @route '/costos/proyectos/{project}/presupuesto/insumos/seed'
 */
seed.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return seed.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::seed
 * @see app/Http/Controllers/InsumoProductoController.php:20
 * @route '/costos/proyectos/{project}/presupuesto/insumos/seed'
 */
seed.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: seed.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::seed
 * @see app/Http/Controllers/InsumoProductoController.php:20
 * @route '/costos/proyectos/{project}/presupuesto/insumos/seed'
 */
    const seedForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: seed.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::seed
 * @see app/Http/Controllers/InsumoProductoController.php:20
 * @route '/costos/proyectos/{project}/presupuesto/insumos/seed'
 */
        seedForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: seed.url(args, options),
            method: 'post',
        })
    
    seed.form = seedForm
/**
* @see \App\Http\Controllers\InsumoProductoController::update
 * @see app/Http/Controllers/InsumoProductoController.php:386
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
export const update = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::update
 * @see app/Http/Controllers/InsumoProductoController.php:386
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
update.url = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    insumoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                                insumoId: args.insumoId,
                }

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{insumoId}', parsedArgs.insumoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::update
 * @see app/Http/Controllers/InsumoProductoController.php:386
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
update.put = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::update
 * @see app/Http/Controllers/InsumoProductoController.php:386
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
    const updateForm = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::update
 * @see app/Http/Controllers/InsumoProductoController.php:386
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
        updateForm.put = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\InsumoProductoController::destroy
 * @see app/Http/Controllers/InsumoProductoController.php:430
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
export const destroy = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InsumoProductoController::destroy
 * @see app/Http/Controllers/InsumoProductoController.php:430
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
destroy.url = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    insumoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                                insumoId: args.insumoId,
                }

    return destroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{insumoId}', parsedArgs.insumoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InsumoProductoController::destroy
 * @see app/Http/Controllers/InsumoProductoController.php:430
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
destroy.delete = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\InsumoProductoController::destroy
 * @see app/Http/Controllers/InsumoProductoController.php:430
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
    const destroyForm = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InsumoProductoController::destroy
 * @see app/Http/Controllers/InsumoProductoController.php:430
 * @route '/costos/proyectos/{project}/presupuesto/insumos/{insumoId}'
 */
        destroyForm.delete = (args: { project: string | number, insumoId: string | number } | [project: string | number, insumoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const insumos = {
    search: Object.assign(search, search),
especialidades: Object.assign(especialidades, especialidades),
diccionarios: Object.assign(diccionarios, diccionarios),
unidades: Object.assign(unidades, unidades),
store: Object.assign(store, store),
replace: Object.assign(replace, replace),
seed: Object.assign(seed, seed),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default insumos