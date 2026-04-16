import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/caida-tension',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CaidaTensionController::index
 * @see app/Http/Controllers/CaidaTensionController.php:17
 * @route '/caida-tension'
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
* @see \App\Http\Controllers\CaidaTensionController::store
 * @see app/Http/Controllers/CaidaTensionController.php:42
 * @route '/caida-tension'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/caida-tension',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::store
 * @see app/Http/Controllers/CaidaTensionController.php:42
 * @route '/caida-tension'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::store
 * @see app/Http/Controllers/CaidaTensionController.php:42
 * @route '/caida-tension'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::store
 * @see app/Http/Controllers/CaidaTensionController.php:42
 * @route '/caida-tension'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::store
 * @see app/Http/Controllers/CaidaTensionController.php:42
 * @route '/caida-tension'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CaidaTensionController::join
 * @see app/Http/Controllers/CaidaTensionController.php:158
 * @route '/caida-tension/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/caida-tension/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::join
 * @see app/Http/Controllers/CaidaTensionController.php:158
 * @route '/caida-tension/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::join
 * @see app/Http/Controllers/CaidaTensionController.php:158
 * @route '/caida-tension/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::join
 * @see app/Http/Controllers/CaidaTensionController.php:158
 * @route '/caida-tension/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::join
 * @see app/Http/Controllers/CaidaTensionController.php:158
 * @route '/caida-tension/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
export const show = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/caida-tension/{caidaTension}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
show.url = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { caidaTension: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { caidaTension: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    caidaTension: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        caidaTension: typeof args.caidaTension === 'object'
                ? args.caidaTension.id
                : args.caidaTension,
                }

    return show.definition.url
            .replace('{caidaTension}', parsedArgs.caidaTension.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
show.get = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
show.head = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
    const showForm = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
        showForm.get = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CaidaTensionController::show
 * @see app/Http/Controllers/CaidaTensionController.php:64
 * @route '/caida-tension/{caidaTension}'
 */
        showForm.head = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CaidaTensionController::update
 * @see app/Http/Controllers/CaidaTensionController.php:100
 * @route '/caida-tension/{caidaTension}'
 */
export const update = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/caida-tension/{caidaTension}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::update
 * @see app/Http/Controllers/CaidaTensionController.php:100
 * @route '/caida-tension/{caidaTension}'
 */
update.url = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { caidaTension: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { caidaTension: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    caidaTension: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        caidaTension: typeof args.caidaTension === 'object'
                ? args.caidaTension.id
                : args.caidaTension,
                }

    return update.definition.url
            .replace('{caidaTension}', parsedArgs.caidaTension.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::update
 * @see app/Http/Controllers/CaidaTensionController.php:100
 * @route '/caida-tension/{caidaTension}'
 */
update.patch = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::update
 * @see app/Http/Controllers/CaidaTensionController.php:100
 * @route '/caida-tension/{caidaTension}'
 */
    const updateForm = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::update
 * @see app/Http/Controllers/CaidaTensionController.php:100
 * @route '/caida-tension/{caidaTension}'
 */
        updateForm.patch = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CaidaTensionController::destroy
 * @see app/Http/Controllers/CaidaTensionController.php:127
 * @route '/caida-tension/{caidaTension}'
 */
export const destroy = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/caida-tension/{caidaTension}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::destroy
 * @see app/Http/Controllers/CaidaTensionController.php:127
 * @route '/caida-tension/{caidaTension}'
 */
destroy.url = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { caidaTension: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { caidaTension: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    caidaTension: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        caidaTension: typeof args.caidaTension === 'object'
                ? args.caidaTension.id
                : args.caidaTension,
                }

    return destroy.definition.url
            .replace('{caidaTension}', parsedArgs.caidaTension.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::destroy
 * @see app/Http/Controllers/CaidaTensionController.php:127
 * @route '/caida-tension/{caidaTension}'
 */
destroy.delete = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::destroy
 * @see app/Http/Controllers/CaidaTensionController.php:127
 * @route '/caida-tension/{caidaTension}'
 */
    const destroyForm = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::destroy
 * @see app/Http/Controllers/CaidaTensionController.php:127
 * @route '/caida-tension/{caidaTension}'
 */
        destroyForm.delete = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CaidaTensionController::enableCollab
 * @see app/Http/Controllers/CaidaTensionController.php:142
 * @route '/caida-tension/{caidaTension}/enable-collab'
 */
export const enableCollab = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

enableCollab.definition = {
    methods: ["post"],
    url: '/caida-tension/{caidaTension}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CaidaTensionController::enableCollab
 * @see app/Http/Controllers/CaidaTensionController.php:142
 * @route '/caida-tension/{caidaTension}/enable-collab'
 */
enableCollab.url = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { caidaTension: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { caidaTension: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    caidaTension: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        caidaTension: typeof args.caidaTension === 'object'
                ? args.caidaTension.id
                : args.caidaTension,
                }

    return enableCollab.definition.url
            .replace('{caidaTension}', parsedArgs.caidaTension.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CaidaTensionController::enableCollab
 * @see app/Http/Controllers/CaidaTensionController.php:142
 * @route '/caida-tension/{caidaTension}/enable-collab'
 */
enableCollab.post = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CaidaTensionController::enableCollab
 * @see app/Http/Controllers/CaidaTensionController.php:142
 * @route '/caida-tension/{caidaTension}/enable-collab'
 */
    const enableCollabForm = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollab.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CaidaTensionController::enableCollab
 * @see app/Http/Controllers/CaidaTensionController.php:142
 * @route '/caida-tension/{caidaTension}/enable-collab'
 */
        enableCollabForm.post = (args: { caidaTension: number | { id: number } } | [caidaTension: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollab.url(args, options),
            method: 'post',
        })
    
    enableCollab.form = enableCollabForm
const caidaTension = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
join: Object.assign(join, join),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
enableCollab: Object.assign(enableCollab, enableCollab),
}

export default caidaTension