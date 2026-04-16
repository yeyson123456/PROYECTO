import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/ac-calculation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AcCalculationController::index
 * @see app/Http/Controllers/AcCalculationController.php:17
 * @route '/ac-calculation'
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
* @see \App\Http\Controllers\AcCalculationController::store
 * @see app/Http/Controllers/AcCalculationController.php:42
 * @route '/ac-calculation'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/ac-calculation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AcCalculationController::store
 * @see app/Http/Controllers/AcCalculationController.php:42
 * @route '/ac-calculation'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::store
 * @see app/Http/Controllers/AcCalculationController.php:42
 * @route '/ac-calculation'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::store
 * @see app/Http/Controllers/AcCalculationController.php:42
 * @route '/ac-calculation'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::store
 * @see app/Http/Controllers/AcCalculationController.php:42
 * @route '/ac-calculation'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AcCalculationController::join
 * @see app/Http/Controllers/AcCalculationController.php:153
 * @route '/ac-calculation/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/ac-calculation/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AcCalculationController::join
 * @see app/Http/Controllers/AcCalculationController.php:153
 * @route '/ac-calculation/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::join
 * @see app/Http/Controllers/AcCalculationController.php:153
 * @route '/ac-calculation/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::join
 * @see app/Http/Controllers/AcCalculationController.php:153
 * @route '/ac-calculation/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::join
 * @see app/Http/Controllers/AcCalculationController.php:153
 * @route '/ac-calculation/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
export const show = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/ac-calculation/{acCalculation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
show.url = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { acCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { acCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    acCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        acCalculation: typeof args.acCalculation === 'object'
                ? args.acCalculation.id
                : args.acCalculation,
                }

    return show.definition.url
            .replace('{acCalculation}', parsedArgs.acCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
show.get = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
show.head = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
    const showForm = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
        showForm.get = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AcCalculationController::show
 * @see app/Http/Controllers/AcCalculationController.php:62
 * @route '/ac-calculation/{acCalculation}'
 */
        showForm.head = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AcCalculationController::update
 * @see app/Http/Controllers/AcCalculationController.php:96
 * @route '/ac-calculation/{acCalculation}'
 */
export const update = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/ac-calculation/{acCalculation}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AcCalculationController::update
 * @see app/Http/Controllers/AcCalculationController.php:96
 * @route '/ac-calculation/{acCalculation}'
 */
update.url = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { acCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { acCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    acCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        acCalculation: typeof args.acCalculation === 'object'
                ? args.acCalculation.id
                : args.acCalculation,
                }

    return update.definition.url
            .replace('{acCalculation}', parsedArgs.acCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::update
 * @see app/Http/Controllers/AcCalculationController.php:96
 * @route '/ac-calculation/{acCalculation}'
 */
update.patch = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::update
 * @see app/Http/Controllers/AcCalculationController.php:96
 * @route '/ac-calculation/{acCalculation}'
 */
    const updateForm = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::update
 * @see app/Http/Controllers/AcCalculationController.php:96
 * @route '/ac-calculation/{acCalculation}'
 */
        updateForm.patch = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AcCalculationController::destroy
 * @see app/Http/Controllers/AcCalculationController.php:122
 * @route '/ac-calculation/{acCalculation}'
 */
export const destroy = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/ac-calculation/{acCalculation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AcCalculationController::destroy
 * @see app/Http/Controllers/AcCalculationController.php:122
 * @route '/ac-calculation/{acCalculation}'
 */
destroy.url = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { acCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { acCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    acCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        acCalculation: typeof args.acCalculation === 'object'
                ? args.acCalculation.id
                : args.acCalculation,
                }

    return destroy.definition.url
            .replace('{acCalculation}', parsedArgs.acCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::destroy
 * @see app/Http/Controllers/AcCalculationController.php:122
 * @route '/ac-calculation/{acCalculation}'
 */
destroy.delete = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::destroy
 * @see app/Http/Controllers/AcCalculationController.php:122
 * @route '/ac-calculation/{acCalculation}'
 */
    const destroyForm = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::destroy
 * @see app/Http/Controllers/AcCalculationController.php:122
 * @route '/ac-calculation/{acCalculation}'
 */
        destroyForm.delete = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AcCalculationController::enableCollab
 * @see app/Http/Controllers/AcCalculationController.php:137
 * @route '/ac-calculation/{acCalculation}/enable-collab'
 */
export const enableCollab = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

enableCollab.definition = {
    methods: ["post"],
    url: '/ac-calculation/{acCalculation}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AcCalculationController::enableCollab
 * @see app/Http/Controllers/AcCalculationController.php:137
 * @route '/ac-calculation/{acCalculation}/enable-collab'
 */
enableCollab.url = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { acCalculation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { acCalculation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    acCalculation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        acCalculation: typeof args.acCalculation === 'object'
                ? args.acCalculation.id
                : args.acCalculation,
                }

    return enableCollab.definition.url
            .replace('{acCalculation}', parsedArgs.acCalculation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcCalculationController::enableCollab
 * @see app/Http/Controllers/AcCalculationController.php:137
 * @route '/ac-calculation/{acCalculation}/enable-collab'
 */
enableCollab.post = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AcCalculationController::enableCollab
 * @see app/Http/Controllers/AcCalculationController.php:137
 * @route '/ac-calculation/{acCalculation}/enable-collab'
 */
    const enableCollabForm = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollab.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AcCalculationController::enableCollab
 * @see app/Http/Controllers/AcCalculationController.php:137
 * @route '/ac-calculation/{acCalculation}/enable-collab'
 */
        enableCollabForm.post = (args: { acCalculation: number | { id: number } } | [acCalculation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollab.url(args, options),
            method: 'post',
        })
    
    enableCollab.form = enableCollabForm
const acCalculation = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
join: Object.assign(join, join),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
enableCollab: Object.assign(enableCollab, enableCollab),
}

export default acCalculation