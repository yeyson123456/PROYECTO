import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/agua-calculation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AguaCalculationController::index
 * @see app/Http/Controllers/AguaCalculationController.php:14
 * @route '/agua-calculation'
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
* @see \App\Http\Controllers\AguaCalculationController::store
 * @see app/Http/Controllers/AguaCalculationController.php:36
 * @route '/agua-calculation'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/agua-calculation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::store
 * @see app/Http/Controllers/AguaCalculationController.php:36
 * @route '/agua-calculation'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::store
 * @see app/Http/Controllers/AguaCalculationController.php:36
 * @route '/agua-calculation'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::store
 * @see app/Http/Controllers/AguaCalculationController.php:36
 * @route '/agua-calculation'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::store
 * @see app/Http/Controllers/AguaCalculationController.php:36
 * @route '/agua-calculation'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AguaCalculationController::join
 * @see app/Http/Controllers/AguaCalculationController.php:132
 * @route '/agua-calculation/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/agua-calculation/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::join
 * @see app/Http/Controllers/AguaCalculationController.php:132
 * @route '/agua-calculation/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::join
 * @see app/Http/Controllers/AguaCalculationController.php:132
 * @route '/agua-calculation/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::join
 * @see app/Http/Controllers/AguaCalculationController.php:132
 * @route '/agua-calculation/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::join
 * @see app/Http/Controllers/AguaCalculationController.php:132
 * @route '/agua-calculation/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
export const show = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/agua-calculation/{aguaCalculation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
show.url = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { aguaCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { aguaCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    aguaCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        aguaCalculation: typeof args.aguaCalculation === 'object'
                ? args.aguaCalculation.id
                : args.aguaCalculation,
                }

    return show.definition.url
            .replace('{aguaCalculation}', parsedArgs.aguaCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
show.get = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
show.head = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
    const showForm = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
        showForm.get = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AguaCalculationController::show
 * @see app/Http/Controllers/AguaCalculationController.php:55
 * @route '/agua-calculation/{aguaCalculation}'
 */
        showForm.head = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AguaCalculationController::update
 * @see app/Http/Controllers/AguaCalculationController.php:86
 * @route '/agua-calculation/{aguaCalculation}'
 */
export const update = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/agua-calculation/{aguaCalculation}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::update
 * @see app/Http/Controllers/AguaCalculationController.php:86
 * @route '/agua-calculation/{aguaCalculation}'
 */
update.url = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { aguaCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { aguaCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    aguaCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        aguaCalculation: typeof args.aguaCalculation === 'object'
                ? args.aguaCalculation.id
                : args.aguaCalculation,
                }

    return update.definition.url
            .replace('{aguaCalculation}', parsedArgs.aguaCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::update
 * @see app/Http/Controllers/AguaCalculationController.php:86
 * @route '/agua-calculation/{aguaCalculation}'
 */
update.patch = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::update
 * @see app/Http/Controllers/AguaCalculationController.php:86
 * @route '/agua-calculation/{aguaCalculation}'
 */
    const updateForm = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::update
 * @see app/Http/Controllers/AguaCalculationController.php:86
 * @route '/agua-calculation/{aguaCalculation}'
 */
        updateForm.patch = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AguaCalculationController::destroy
 * @see app/Http/Controllers/AguaCalculationController.php:107
 * @route '/agua-calculation/{aguaCalculation}'
 */
export const destroy = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/agua-calculation/{aguaCalculation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::destroy
 * @see app/Http/Controllers/AguaCalculationController.php:107
 * @route '/agua-calculation/{aguaCalculation}'
 */
destroy.url = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { aguaCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { aguaCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    aguaCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        aguaCalculation: typeof args.aguaCalculation === 'object'
                ? args.aguaCalculation.id
                : args.aguaCalculation,
                }

    return destroy.definition.url
            .replace('{aguaCalculation}', parsedArgs.aguaCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::destroy
 * @see app/Http/Controllers/AguaCalculationController.php:107
 * @route '/agua-calculation/{aguaCalculation}'
 */
destroy.delete = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::destroy
 * @see app/Http/Controllers/AguaCalculationController.php:107
 * @route '/agua-calculation/{aguaCalculation}'
 */
    const destroyForm = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::destroy
 * @see app/Http/Controllers/AguaCalculationController.php:107
 * @route '/agua-calculation/{aguaCalculation}'
 */
        destroyForm.delete = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AguaCalculationController::enableCollaboration
 * @see app/Http/Controllers/AguaCalculationController.php:119
 * @route '/agua-calculation/{aguaCalculation}/enable-collab'
 */
export const enableCollaboration = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

enableCollaboration.definition = {
    methods: ["post"],
    url: '/agua-calculation/{aguaCalculation}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AguaCalculationController::enableCollaboration
 * @see app/Http/Controllers/AguaCalculationController.php:119
 * @route '/agua-calculation/{aguaCalculation}/enable-collab'
 */
enableCollaboration.url = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { aguaCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { aguaCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    aguaCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        aguaCalculation: typeof args.aguaCalculation === 'object'
                ? args.aguaCalculation.id
                : args.aguaCalculation,
                }

    return enableCollaboration.definition.url
            .replace('{aguaCalculation}', parsedArgs.aguaCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AguaCalculationController::enableCollaboration
 * @see app/Http/Controllers/AguaCalculationController.php:119
 * @route '/agua-calculation/{aguaCalculation}/enable-collab'
 */
enableCollaboration.post = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AguaCalculationController::enableCollaboration
 * @see app/Http/Controllers/AguaCalculationController.php:119
 * @route '/agua-calculation/{aguaCalculation}/enable-collab'
 */
    const enableCollaborationForm = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollaboration.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AguaCalculationController::enableCollaboration
 * @see app/Http/Controllers/AguaCalculationController.php:119
 * @route '/agua-calculation/{aguaCalculation}/enable-collab'
 */
        enableCollaborationForm.post = (args: { aguaCalculation: number | { id: number } } | [aguaCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollaboration.url(args, options),
            method: 'post',
        })
    
    enableCollaboration.form = enableCollaborationForm
const AguaCalculationController = { index, store, join, show, update, destroy, enableCollaboration }

export default AguaCalculationController