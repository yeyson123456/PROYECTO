import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
const indexab78964663655192851d1ba37f703089 = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab78964663655192851d1ba37f703089.url(args, options),
    method: 'get',
})

indexab78964663655192851d1ba37f703089.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
indexab78964663655192851d1ba37f703089.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return indexab78964663655192851d1ba37f703089.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
indexab78964663655192851d1ba37f703089.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab78964663655192851d1ba37f703089.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
indexab78964663655192851d1ba37f703089.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexab78964663655192851d1ba37f703089.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
    const indexab78964663655192851d1ba37f703089Form = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexab78964663655192851d1ba37f703089.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
        indexab78964663655192851d1ba37f703089Form.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexab78964663655192851d1ba37f703089.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/costos/{costoProject}/metrado-sanitarias'
 */
        indexab78964663655192851d1ba37f703089Form.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexab78964663655192851d1ba37f703089.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexab78964663655192851d1ba37f703089.form = indexab78964663655192851d1ba37f703089Form
    /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
const indexf30fea3a1f0702b3cd67ed87ceda7e3a = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, options),
    method: 'get',
})

indexf30fea3a1f0702b3cd67ed87ceda7e3a.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-sanitarias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
indexf30fea3a1f0702b3cd67ed87ceda7e3a.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return indexf30fea3a1f0702b3cd67ed87ceda7e3a.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
indexf30fea3a1f0702b3cd67ed87ceda7e3a.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
indexf30fea3a1f0702b3cd67ed87ceda7e3a.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
    const indexf30fea3a1f0702b3cd67ed87ceda7e3aForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
        indexf30fea3a1f0702b3cd67ed87ceda7e3aForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::index
 * @see app/Http/Controllers/MetradoSanitariasController.php:25
 * @route '/{costoProject}/metrado-sanitarias'
 */
        indexf30fea3a1f0702b3cd67ed87ceda7e3aForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf30fea3a1f0702b3cd67ed87ceda7e3a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexf30fea3a1f0702b3cd67ed87ceda7e3a.form = indexf30fea3a1f0702b3cd67ed87ceda7e3aForm

export const index = {
    '/costos/{costoProject}/metrado-sanitarias': indexab78964663655192851d1ba37f703089,
    '/{costoProject}/metrado-sanitarias': indexf30fea3a1f0702b3cd67ed87ceda7e3a,
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
export const getConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})

getConfig.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias/config',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
getConfig.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfig.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
getConfig.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConfig.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
    const getConfigForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getConfig.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
        getConfigForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConfig.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:52
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:57
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
export const updateConfig = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

updateConfig.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-sanitarias/config',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:57
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:57
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
 */
updateConfig.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateConfig.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:57
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateConfig
 * @see app/Http/Controllers/MetradoSanitariasController.php:57
 * @route '/costos/{costoProject}/metrado-sanitarias/config'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
const getModulo0cfc8178eceffa374441f1f9930e571a = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
    method: 'get',
})

getModulo0cfc8178eceffa374441f1f9930e571a.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModulo0cfc8178eceffa374441f1f9930e571a.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
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

    return getModulo0cfc8178eceffa374441f1f9930e571a.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModulo0cfc8178eceffa374441f1f9930e571a.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModulo0cfc8178eceffa374441f1f9930e571a.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const getModulo0cfc8178eceffa374441f1f9930e571aForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        getModulo0cfc8178eceffa374441f1f9930e571aForm.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        getModulo0cfc8178eceffa374441f1f9930e571aForm.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModulo0cfc8178eceffa374441f1f9930e571a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getModulo0cfc8178eceffa374441f1f9930e571a.form = getModulo0cfc8178eceffa374441f1f9930e571aForm
    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
const getModuloc3be45a721fc857a332c8fc84601d1c5 = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
    method: 'get',
})

getModuloc3be45a721fc857a332c8fc84601d1c5.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModuloc3be45a721fc857a332c8fc84601d1c5.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
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

    return getModuloc3be45a721fc857a332c8fc84601d1c5.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModuloc3be45a721fc857a332c8fc84601d1c5.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
getModuloc3be45a721fc857a332c8fc84601d1c5.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const getModuloc3be45a721fc857a332c8fc84601d1c5Form = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        getModuloc3be45a721fc857a332c8fc84601d1c5Form.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        getModuloc3be45a721fc857a332c8fc84601d1c5Form.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getModuloc3be45a721fc857a332c8fc84601d1c5.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getModuloc3be45a721fc857a332c8fc84601d1c5.form = getModuloc3be45a721fc857a332c8fc84601d1c5Form

export const getModulo = {
    '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}': getModulo0cfc8178eceffa374441f1f9930e571a,
    '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}': getModuloc3be45a721fc857a332c8fc84601d1c5,
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
const updateModulo0cfc8178eceffa374441f1f9930e571a = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
    method: 'patch',
})

updateModulo0cfc8178eceffa374441f1f9930e571a.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
updateModulo0cfc8178eceffa374441f1f9930e571a.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
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

    return updateModulo0cfc8178eceffa374441f1f9930e571a.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
updateModulo0cfc8178eceffa374441f1f9930e571a.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModulo0cfc8178eceffa374441f1f9930e571a.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const updateModulo0cfc8178eceffa374441f1f9930e571aForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateModulo0cfc8178eceffa374441f1f9930e571a.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        updateModulo0cfc8178eceffa374441f1f9930e571aForm.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateModulo0cfc8178eceffa374441f1f9930e571a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateModulo0cfc8178eceffa374441f1f9930e571a.form = updateModulo0cfc8178eceffa374441f1f9930e571aForm
    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
const updateModuloc3be45a721fc857a332c8fc84601d1c5 = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
    method: 'patch',
})

updateModuloc3be45a721fc857a332c8fc84601d1c5.definition = {
    methods: ["patch"],
    url: '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
updateModuloc3be45a721fc857a332c8fc84601d1c5.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
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

    return updateModuloc3be45a721fc857a332c8fc84601d1c5.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
updateModuloc3be45a721fc857a332c8fc84601d1c5.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateModuloc3be45a721fc857a332c8fc84601d1c5.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const updateModuloc3be45a721fc857a332c8fc84601d1c5Form = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateModuloc3be45a721fc857a332c8fc84601d1c5.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateModulo
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        updateModuloc3be45a721fc857a332c8fc84601d1c5Form.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateModuloc3be45a721fc857a332c8fc84601d1c5.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateModuloc3be45a721fc857a332c8fc84601d1c5.form = updateModuloc3be45a721fc857a332c8fc84601d1c5Form

export const updateModulo = {
    '/costos/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}': updateModulo0cfc8178eceffa374441f1f9930e571a,
    '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}': updateModuloc3be45a721fc857a332c8fc84601d1c5,
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
export const getExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})

getExterior.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias/exterior',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
getExterior.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getExterior.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
getExterior.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getExterior.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
    const getExteriorForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getExterior.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
        getExteriorForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getExterior.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:72
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:83
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
export const updateExterior = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

updateExterior.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-sanitarias/exterior',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:83
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:83
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
 */
updateExterior.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateExterior.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:83
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateExterior
 * @see app/Http/Controllers/MetradoSanitariasController.php:83
 * @route '/costos/{costoProject}/metrado-sanitarias/exterior'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
export const getCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})

getCisterna.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias/cisterna',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
getCisterna.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCisterna.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
getCisterna.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCisterna.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
    const getCisternaForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCisterna.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
        getCisternaForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCisterna.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:91
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:102
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
export const updateCisterna = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

updateCisterna.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-sanitarias/cisterna',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:102
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:102
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
 */
updateCisterna.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCisterna.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:102
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateCisterna
 * @see app/Http/Controllers/MetradoSanitariasController.php:102
 * @route '/costos/{costoProject}/metrado-sanitarias/cisterna'
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
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
const getResumenfcc0292100d0b5cd447d0c53b51a1c5d = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, options),
    method: 'get',
})

getResumenfcc0292100d0b5cd447d0c53b51a1c5d.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-sanitarias/resumen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getResumenfcc0292100d0b5cd447d0c53b51a1c5d.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
getResumenfcc0292100d0b5cd447d0c53b51a1c5d.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
getResumenfcc0292100d0b5cd447d0c53b51a1c5d.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
    const getResumenfcc0292100d0b5cd447d0c53b51a1c5dForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
        getResumenfcc0292100d0b5cd447d0c53b51a1c5dForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
        getResumenfcc0292100d0b5cd447d0c53b51a1c5dForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumenfcc0292100d0b5cd447d0c53b51a1c5d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getResumenfcc0292100d0b5cd447d0c53b51a1c5d.form = getResumenfcc0292100d0b5cd447d0c53b51a1c5dForm
    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
const getResumene762401a499f817ea247ae5b6f4e201a = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumene762401a499f817ea247ae5b6f4e201a.url(args, options),
    method: 'get',
})

getResumene762401a499f817ea247ae5b6f4e201a.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-sanitarias/resumen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
getResumene762401a499f817ea247ae5b6f4e201a.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return getResumene762401a499f817ea247ae5b6f4e201a.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
getResumene762401a499f817ea247ae5b6f4e201a.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResumene762401a499f817ea247ae5b6f4e201a.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
getResumene762401a499f817ea247ae5b6f4e201a.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResumene762401a499f817ea247ae5b6f4e201a.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
    const getResumene762401a499f817ea247ae5b6f4e201aForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getResumene762401a499f817ea247ae5b6f4e201a.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
        getResumene762401a499f817ea247ae5b6f4e201aForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumene762401a499f817ea247ae5b6f4e201a.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::getResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
        getResumene762401a499f817ea247ae5b6f4e201aForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResumene762401a499f817ea247ae5b6f4e201a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getResumene762401a499f817ea247ae5b6f4e201a.form = getResumene762401a499f817ea247ae5b6f4e201aForm

export const getResumen = {
    '/costos/{costoProject}/metrado-sanitarias/resumen': getResumenfcc0292100d0b5cd447d0c53b51a1c5d,
    '/{costoProject}/metrado-sanitarias/resumen': getResumene762401a499f817ea247ae5b6f4e201a,
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:121
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
export const updateResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

updateResumen.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-sanitarias/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::updateResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:121
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:121
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
 */
updateResumen.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::updateResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:121
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
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
* @see \App\Http\Controllers\MetradoSanitariasController::updateResumen
 * @see app/Http/Controllers/MetradoSanitariasController.php:121
 * @route '/costos/{costoProject}/metrado-sanitarias/resumen'
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
const MetradoSanitariasController = { index, getConfig, updateConfig, getModulo, updateModulo, getExterior, updateExterior, getCisterna, updateCisterna, getResumen, updateResumen }

export default MetradoSanitariasController