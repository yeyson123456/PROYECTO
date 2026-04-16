import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
const index2f69c7332424091fd7580c108ef300eb = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2f69c7332424091fd7580c108ef300eb.url(args, options),
    method: 'get',
})

index2f69c7332424091fd7580c108ef300eb.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
index2f69c7332424091fd7580c108ef300eb.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return index2f69c7332424091fd7580c108ef300eb.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
index2f69c7332424091fd7580c108ef300eb.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2f69c7332424091fd7580c108ef300eb.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
index2f69c7332424091fd7580c108ef300eb.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2f69c7332424091fd7580c108ef300eb.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
    const index2f69c7332424091fd7580c108ef300ebForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index2f69c7332424091fd7580c108ef300eb.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
        index2f69c7332424091fd7580c108ef300ebForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2f69c7332424091fd7580c108ef300eb.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/costos/{costoProject}/metrado-estructuras'
 */
        index2f69c7332424091fd7580c108ef300ebForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2f69c7332424091fd7580c108ef300eb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index2f69c7332424091fd7580c108ef300eb.form = index2f69c7332424091fd7580c108ef300ebForm
    /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
const indexeb5893d7c3e2fd9f10d953480fe10e20 = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, options),
    method: 'get',
})

indexeb5893d7c3e2fd9f10d953480fe10e20.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-estructuras',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
indexeb5893d7c3e2fd9f10d953480fe10e20.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return indexeb5893d7c3e2fd9f10d953480fe10e20.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
indexeb5893d7c3e2fd9f10d953480fe10e20.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
indexeb5893d7c3e2fd9f10d953480fe10e20.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
    const indexeb5893d7c3e2fd9f10d953480fe10e20Form = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
        indexeb5893d7c3e2fd9f10d953480fe10e20Form.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::index
 * @see app/Http/Controllers/MetradoEstructurasController.php:25
 * @route '/{costoProject}/metrado-estructuras'
 */
        indexeb5893d7c3e2fd9f10d953480fe10e20Form.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexeb5893d7c3e2fd9f10d953480fe10e20.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexeb5893d7c3e2fd9f10d953480fe10e20.form = indexeb5893d7c3e2fd9f10d953480fe10e20Form

export const index = {
    '/costos/{costoProject}/metrado-estructuras': index2f69c7332424091fd7580c108ef300eb,
    '/{costoProject}/metrado-estructuras': indexeb5893d7c3e2fd9f10d953480fe10e20,
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
export const getConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})

getConfig.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/config',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
getConfig.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return getConfig.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
getConfig.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
getConfig.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConfig.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
    const getConfigForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getConfig.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
        getConfigForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConfig.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
        getConfigForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConfig.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getConfig.form = getConfigForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
export const updateConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

updateConfig.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/config',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
updateConfig.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return updateConfig.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
updateConfig.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
    const updateConfigForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateConfig.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateConfig
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
        updateConfigForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateConfig.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateConfig.form = updateConfigForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
export const getModulo = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo.url(args, options),
    method: 'get',
})

getModulo.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
getModulo.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduloNumero: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduloNumero: args.moduloNumero,
                }

    return getModulo.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
getModulo.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
getModulo.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModulo.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
    const getModuloForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getModulo.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
        getModuloForm.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModulo.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:62
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
        getModuloForm.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModulo.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getModulo.form = getModuloForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:67
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
export const updateModulo = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo.url(args, options),
    method: 'patch',
})

updateModulo.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:67
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
updateModulo.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduloNumero: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduloNumero: args.moduloNumero,
                }

    return updateModulo.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:67
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
updateModulo.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:67
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
    const updateModuloForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateModulo.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateModulo
 * @see app/Http/Controllers/MetradoEstructurasController.php:67
 * @route '/costos/{costoProject}/metrado-estructuras/modulo/{moduloNumero}'
 */
        updateModuloForm.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateModulo.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateModulo.form = updateModuloForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
export const getExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})

getExterior.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/exterior',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
getExterior.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return getExterior.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
getExterior.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
getExterior.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getExterior.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
    const getExteriorForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getExterior.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
        getExteriorForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getExterior.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:72
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
        getExteriorForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getExterior.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getExterior.form = getExteriorForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:83
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
export const updateExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

updateExterior.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/exterior',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:83
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
updateExterior.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return updateExterior.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:83
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
updateExterior.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:83
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
    const updateExteriorForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateExterior.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateExterior
 * @see app/Http/Controllers/MetradoEstructurasController.php:83
 * @route '/costos/{costoProject}/metrado-estructuras/exterior'
 */
        updateExteriorForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateExterior.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateExterior.form = updateExteriorForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
export const getCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})

getCisterna.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/cisterna',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
getCisterna.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return getCisterna.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
getCisterna.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
getCisterna.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCisterna.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
    const getCisternaForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCisterna.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
        getCisternaForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCisterna.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:91
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
        getCisternaForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCisterna.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCisterna.form = getCisternaForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:102
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
export const updateCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

updateCisterna.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/cisterna',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:102
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
updateCisterna.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return updateCisterna.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:102
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
updateCisterna.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:102
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
    const updateCisternaForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateCisterna.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateCisterna
 * @see app/Http/Controllers/MetradoEstructurasController.php:102
 * @route '/costos/{costoProject}/metrado-estructuras/cisterna'
 */
        updateCisternaForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateCisterna.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateCisterna.form = updateCisternaForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
export const getResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumen.url(args, options),
    method: 'get',
})

getResumen.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/resumen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
getResumen.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return getResumen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
getResumen.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumen.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
getResumen.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResumen.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
    const getResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getResumen.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
        getResumenForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumen.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:110
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
        getResumenForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumen.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getResumen.form = getResumenForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:121
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
export const updateResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

updateResumen.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:121
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
updateResumen.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return updateResumen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:121
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
updateResumen.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:121
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
    const updateResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateResumen.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:121
 * @route '/costos/{costoProject}/metrado-estructuras/resumen'
 */
        updateResumenForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateResumen.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateResumen.form = updateResumenForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::syncResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:129
 * @route '/costos/{costoProject}/metrado-estructuras/resumen/sync'
 */
export const syncResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

syncResumen.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/metrado-estructuras/resumen/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::syncResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:129
 * @route '/costos/{costoProject}/metrado-estructuras/resumen/sync'
 */
syncResumen.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return syncResumen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::syncResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:129
 * @route '/costos/{costoProject}/metrado-estructuras/resumen/sync'
 */
syncResumen.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::syncResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:129
 * @route '/costos/{costoProject}/metrado-estructuras/resumen/sync'
 */
    const syncResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: syncResumen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::syncResumen
 * @see app/Http/Controllers/MetradoEstructurasController.php:129
 * @route '/costos/{costoProject}/metrado-estructuras/resumen/sync'
 */
        syncResumenForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: syncResumen.url(args, options),
            method: 'post',
        })
    
    syncResumen.form = syncResumenForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
export const getMetrado = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMetrado.url(args, options),
    method: 'get',
})

getMetrado.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-estructuras/metrado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
getMetrado.url = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: args.costoProject,
                }

    return getMetrado.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
getMetrado.get = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMetrado.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
getMetrado.head = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMetrado.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
    const getMetradoForm = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getMetrado.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        getMetradoForm.get = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMetrado.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::getMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        getMetradoForm.head = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMetrado.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getMetrado.form = getMetradoForm
/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
export const updateMetrado = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

updateMetrado.definition = {
    methods: ["patch"],
    url: '/{costoProject}/metrado-estructuras/metrado',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
updateMetrado.url = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: args.costoProject,
                }

    return updateMetrado.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::updateMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
updateMetrado.patch = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
    const updateMetradoForm = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateMetrado.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::updateMetrado
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        updateMetradoForm.patch = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateMetrado.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateMetrado.form = updateMetradoForm
const MetradoEstructurasController = { index, getConfig, updateConfig, getModulo, updateModulo, getExterior, updateExterior, getCisterna, updateCisterna, getResumen, updateResumen, syncResumen, getMetrado, updateMetrado }

export default MetradoEstructurasController