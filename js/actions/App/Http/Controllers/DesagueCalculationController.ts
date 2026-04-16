import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/desague-calculation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DesagueCalculationController::index
 * @see app/Http/Controllers/DesagueCalculationController.php:15
 * @route '/desague-calculation'
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
* @see \App\Http\Controllers\DesagueCalculationController::store
 * @see app/Http/Controllers/DesagueCalculationController.php:37
 * @route '/desague-calculation'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/desague-calculation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::store
 * @see app/Http/Controllers/DesagueCalculationController.php:37
 * @route '/desague-calculation'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::store
 * @see app/Http/Controllers/DesagueCalculationController.php:37
 * @route '/desague-calculation'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::store
 * @see app/Http/Controllers/DesagueCalculationController.php:37
 * @route '/desague-calculation'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::store
 * @see app/Http/Controllers/DesagueCalculationController.php:37
 * @route '/desague-calculation'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DesagueCalculationController::join
 * @see app/Http/Controllers/DesagueCalculationController.php:133
 * @route '/desague-calculation/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/desague-calculation/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::join
 * @see app/Http/Controllers/DesagueCalculationController.php:133
 * @route '/desague-calculation/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::join
 * @see app/Http/Controllers/DesagueCalculationController.php:133
 * @route '/desague-calculation/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::join
 * @see app/Http/Controllers/DesagueCalculationController.php:133
 * @route '/desague-calculation/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::join
 * @see app/Http/Controllers/DesagueCalculationController.php:133
 * @route '/desague-calculation/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
export const show = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/desague-calculation/{desagueCalculation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
show.url = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { desagueCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { desagueCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    desagueCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        desagueCalculation: typeof args.desagueCalculation === 'object'
                ? args.desagueCalculation.id
                : args.desagueCalculation,
                }

    return show.definition.url
            .replace('{desagueCalculation}', parsedArgs.desagueCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
show.get = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
show.head = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
    const showForm = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
        showForm.get = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DesagueCalculationController::show
 * @see app/Http/Controllers/DesagueCalculationController.php:56
 * @route '/desague-calculation/{desagueCalculation}'
 */
        showForm.head = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DesagueCalculationController::update
 * @see app/Http/Controllers/DesagueCalculationController.php:87
 * @route '/desague-calculation/{desagueCalculation}'
 */
export const update = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/desague-calculation/{desagueCalculation}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::update
 * @see app/Http/Controllers/DesagueCalculationController.php:87
 * @route '/desague-calculation/{desagueCalculation}'
 */
update.url = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { desagueCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { desagueCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    desagueCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        desagueCalculation: typeof args.desagueCalculation === 'object'
                ? args.desagueCalculation.id
                : args.desagueCalculation,
                }

    return update.definition.url
            .replace('{desagueCalculation}', parsedArgs.desagueCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::update
 * @see app/Http/Controllers/DesagueCalculationController.php:87
 * @route '/desague-calculation/{desagueCalculation}'
 */
update.patch = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::update
 * @see app/Http/Controllers/DesagueCalculationController.php:87
 * @route '/desague-calculation/{desagueCalculation}'
 */
    const updateForm = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::update
 * @see app/Http/Controllers/DesagueCalculationController.php:87
 * @route '/desague-calculation/{desagueCalculation}'
 */
        updateForm.patch = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DesagueCalculationController::destroy
 * @see app/Http/Controllers/DesagueCalculationController.php:108
 * @route '/desague-calculation/{desagueCalculation}'
 */
export const destroy = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/desague-calculation/{desagueCalculation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::destroy
 * @see app/Http/Controllers/DesagueCalculationController.php:108
 * @route '/desague-calculation/{desagueCalculation}'
 */
destroy.url = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { desagueCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { desagueCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    desagueCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        desagueCalculation: typeof args.desagueCalculation === 'object'
                ? args.desagueCalculation.id
                : args.desagueCalculation,
                }

    return destroy.definition.url
            .replace('{desagueCalculation}', parsedArgs.desagueCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::destroy
 * @see app/Http/Controllers/DesagueCalculationController.php:108
 * @route '/desague-calculation/{desagueCalculation}'
 */
destroy.delete = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::destroy
 * @see app/Http/Controllers/DesagueCalculationController.php:108
 * @route '/desague-calculation/{desagueCalculation}'
 */
    const destroyForm = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::destroy
 * @see app/Http/Controllers/DesagueCalculationController.php:108
 * @route '/desague-calculation/{desagueCalculation}'
 */
        destroyForm.delete = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DesagueCalculationController::enableCollaboration
 * @see app/Http/Controllers/DesagueCalculationController.php:120
 * @route '/desague-calculation/{desagueCalculation}/enable-collab'
 */
export const enableCollaboration = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

enableCollaboration.definition = {
    methods: ["post"],
    url: '/desague-calculation/{desagueCalculation}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DesagueCalculationController::enableCollaboration
 * @see app/Http/Controllers/DesagueCalculationController.php:120
 * @route '/desague-calculation/{desagueCalculation}/enable-collab'
 */
enableCollaboration.url = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { desagueCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { desagueCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    desagueCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        desagueCalculation: typeof args.desagueCalculation === 'object'
                ? args.desagueCalculation.id
                : args.desagueCalculation,
                }

    return enableCollaboration.definition.url
            .replace('{desagueCalculation}', parsedArgs.desagueCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DesagueCalculationController::enableCollaboration
 * @see app/Http/Controllers/DesagueCalculationController.php:120
 * @route '/desague-calculation/{desagueCalculation}/enable-collab'
 */
enableCollaboration.post = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DesagueCalculationController::enableCollaboration
 * @see app/Http/Controllers/DesagueCalculationController.php:120
 * @route '/desague-calculation/{desagueCalculation}/enable-collab'
 */
    const enableCollaborationForm = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollaboration.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DesagueCalculationController::enableCollaboration
 * @see app/Http/Controllers/DesagueCalculationController.php:120
 * @route '/desague-calculation/{desagueCalculation}/enable-collab'
 */
        enableCollaborationForm.post = (args: { desagueCalculation: number | { id: number } } | [desagueCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollaboration.url(args, options),
            method: 'post',
        })
    
    enableCollaboration.form = enableCollaborationForm
const DesagueCalculationController = { index, store, join, show, update, destroy, enableCollaboration }

export default DesagueCalculationController