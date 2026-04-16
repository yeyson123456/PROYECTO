import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
export const index = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
index.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
index.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
index.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
    const indexForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
        indexForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::index
 * @see app/Http/Controllers/MetradoArquitecturaController.php:25
 * @route '/costos/{costoProject}/metrado-arquitectura'
 */
        indexForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
export const getConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})

getConfig.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura/config',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
getConfig.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
getConfig.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConfig.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
    const getConfigForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getConfig.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
        getConfigForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConfig.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:52
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:57
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
export const updateConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

updateConfig.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-arquitectura/config',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:57
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:57
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
 */
updateConfig.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:57
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateConfig
 * @see app/Http/Controllers/MetradoArquitecturaController.php:57
 * @route '/costos/{costoProject}/metrado-arquitectura/config'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
export const getModulo = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo.url(args, options),
    method: 'get',
})

getModulo.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
getModulo.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
getModulo.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModulo.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
    const getModuloForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getModulo.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
        getModuloForm.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModulo.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:62
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:67
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
export const updateModulo = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo.url(args, options),
    method: 'patch',
})

updateModulo.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:67
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:67
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
 */
updateModulo.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:67
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateModulo
 * @see app/Http/Controllers/MetradoArquitecturaController.php:67
 * @route '/costos/{costoProject}/metrado-arquitectura/modulo/{moduloNumero}'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
export const getExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})

getExterior.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura/exterior',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
getExterior.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
getExterior.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getExterior.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
    const getExteriorForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getExterior.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
        getExteriorForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getExterior.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:72
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:83
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
export const updateExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

updateExterior.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-arquitectura/exterior',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:83
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:83
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
 */
updateExterior.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:83
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateExterior
 * @see app/Http/Controllers/MetradoArquitecturaController.php:83
 * @route '/costos/{costoProject}/metrado-arquitectura/exterior'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
export const getCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})

getCisterna.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura/cisterna',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
getCisterna.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
getCisterna.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCisterna.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
    const getCisternaForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCisterna.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
        getCisternaForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCisterna.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:91
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:102
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
export const updateCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

updateCisterna.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-arquitectura/cisterna',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:102
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:102
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
 */
updateCisterna.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:102
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateCisterna
 * @see app/Http/Controllers/MetradoArquitecturaController.php:102
 * @route '/costos/{costoProject}/metrado-arquitectura/cisterna'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
export const getResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumen.url(args, options),
    method: 'get',
})

getResumen.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-arquitectura/resumen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
getResumen.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumen.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
getResumen.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResumen.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
    const getResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getResumen.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
        getResumenForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumen.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::getResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:110
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:121
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
export const updateResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

updateResumen.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-arquitectura/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:121
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:121
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
 */
updateResumen.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::updateResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:121
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::updateResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:121
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::syncResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:129
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen/sync'
 */
export const syncResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

syncResumen.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/metrado-arquitectura/resumen/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoArquitecturaController::syncResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:129
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen/sync'
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
* @see \App\Http\Controllers\MetradoArquitecturaController::syncResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:129
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen/sync'
 */
syncResumen.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoArquitecturaController::syncResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:129
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen/sync'
 */
    const syncResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: syncResumen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoArquitecturaController::syncResumen
 * @see app/Http/Controllers/MetradoArquitecturaController.php:129
 * @route '/costos/{costoProject}/metrado-arquitectura/resumen/sync'
 */
        syncResumenForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: syncResumen.url(args, options),
            method: 'post',
        })
    
    syncResumen.form = syncResumenForm
const MetradoArquitecturaController = { index, getConfig, updateConfig, getModulo, updateModulo, getExterior, updateExterior, getCisterna, updateCisterna, getResumen, updateResumen, syncResumen }

export default MetradoArquitecturaController