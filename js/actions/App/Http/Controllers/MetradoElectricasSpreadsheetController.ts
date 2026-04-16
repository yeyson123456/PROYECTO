import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/metrados/electricas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::index
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:13
 * @route '/metrados/electricas'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::store
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:35
 * @route '/metrados/electricas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/metrados/electricas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::store
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:35
 * @route '/metrados/electricas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::store
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:35
 * @route '/metrados/electricas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::store
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:35
 * @route '/metrados/electricas'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::store
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:35
 * @route '/metrados/electricas'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::join
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:115
 * @route '/metrados/electricas/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/metrados/electricas/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::join
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:115
 * @route '/metrados/electricas/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::join
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:115
 * @route '/metrados/electricas/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::join
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:115
 * @route '/metrados/electricas/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::join
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:115
 * @route '/metrados/electricas/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
export const show = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/metrados/electricas/{metradosElectrica}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
show.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return show.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
show.get = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
show.head = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
    const showForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
        showForm.get = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::show
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:52
 * @route '/metrados/electricas/{metradosElectrica}'
 */
        showForm.head = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:81
 * @route '/metrados/electricas/{metradosElectrica}'
 */
export const update = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/metrados/electricas/{metradosElectrica}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:81
 * @route '/metrados/electricas/{metradosElectrica}'
 */
update.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return update.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:81
 * @route '/metrados/electricas/{metradosElectrica}'
 */
update.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:81
 * @route '/metrados/electricas/{metradosElectrica}'
 */
    const updateForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:81
 * @route '/metrados/electricas/{metradosElectrica}'
 */
        updateForm.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateMetrado
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:88
 * @route '/metrados/electricas/{metradosElectrica}/metrado'
 */
export const updateMetrado = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

updateMetrado.definition = {
    methods: ["patch"],
    url: '/metrados/electricas/{metradosElectrica}/metrado',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateMetrado
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:88
 * @route '/metrados/electricas/{metradosElectrica}/metrado'
 */
updateMetrado.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return updateMetrado.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateMetrado
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:88
 * @route '/metrados/electricas/{metradosElectrica}/metrado'
 */
updateMetrado.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateMetrado
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:88
 * @route '/metrados/electricas/{metradosElectrica}/metrado'
 */
    const updateMetradoForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateMetrado.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateMetrado
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:88
 * @route '/metrados/electricas/{metradosElectrica}/metrado'
 */
        updateMetradoForm.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateMetrado.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateMetrado.form = updateMetradoForm
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateResumen
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
export const updateResumen = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

updateResumen.definition = {
    methods: ["patch"],
    url: '/metrados/electricas/{metradosElectrica}/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateResumen
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
updateResumen.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return updateResumen.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateResumen
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
updateResumen.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateResumen
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
    const updateResumenForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateResumen.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::updateResumen
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
        updateResumenForm.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:106
 * @route '/metrados/electricas/{metradosElectrica}'
 */
export const destroy = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/metrados/electricas/{metradosElectrica}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:106
 * @route '/metrados/electricas/{metradosElectrica}'
 */
destroy.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return destroy.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:106
 * @route '/metrados/electricas/{metradosElectrica}'
 */
destroy.delete = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:106
 * @route '/metrados/electricas/{metradosElectrica}'
 */
    const destroyForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:106
 * @route '/metrados/electricas/{metradosElectrica}'
 */
        destroyForm.delete = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:0
 * @route '/metrados/electricas/{metradosElectrica}/enable-collab'
 */
export const enableCollaboration = (args: { metradosElectrica: string | number } | [metradosElectrica: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

enableCollaboration.definition = {
    methods: ["post"],
    url: '/metrados/electricas/{metradosElectrica}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:0
 * @route '/metrados/electricas/{metradosElectrica}/enable-collab'
 */
enableCollaboration.url = (args: { metradosElectrica: string | number } | [metradosElectrica: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: args.metradosElectrica,
                }

    return enableCollaboration.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:0
 * @route '/metrados/electricas/{metradosElectrica}/enable-collab'
 */
enableCollaboration.post = (args: { metradosElectrica: string | number } | [metradosElectrica: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:0
 * @route '/metrados/electricas/{metradosElectrica}/enable-collab'
 */
    const enableCollaborationForm = (args: { metradosElectrica: string | number } | [metradosElectrica: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollaboration.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:0
 * @route '/metrados/electricas/{metradosElectrica}/enable-collab'
 */
        enableCollaborationForm.post = (args: { metradosElectrica: string | number } | [metradosElectrica: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollaboration.url(args, options),
            method: 'post',
        })
    
    enableCollaboration.form = enableCollaborationForm
const MetradoElectricasSpreadsheetController = { index, store, join, show, update, updateMetrado, updateResumen, destroy, enableCollaboration }

export default MetradoElectricasSpreadsheetController