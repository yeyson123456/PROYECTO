import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/spatt-pararrayos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::index
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:16
 * @route '/spatt-pararrayos'
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
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::store
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:41
 * @route '/spatt-pararrayos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/spatt-pararrayos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::store
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:41
 * @route '/spatt-pararrayos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::store
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:41
 * @route '/spatt-pararrayos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::store
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:41
 * @route '/spatt-pararrayos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::store
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:41
 * @route '/spatt-pararrayos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::join
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:131
 * @route '/spatt-pararrayos/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/spatt-pararrayos/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::join
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:131
 * @route '/spatt-pararrayos/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::join
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:131
 * @route '/spatt-pararrayos/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::join
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:131
 * @route '/spatt-pararrayos/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::join
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:131
 * @route '/spatt-pararrayos/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
export const show = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/spatt-pararrayos/{spattPararrayo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
show.url = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spattPararrayo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { spattPararrayo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    spattPararrayo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        spattPararrayo: typeof args.spattPararrayo === 'object'
                ? args.spattPararrayo.id
                : args.spattPararrayo,
                }

    return show.definition.url
            .replace('{spattPararrayo}', parsedArgs.spattPararrayo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
show.get = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
show.head = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
    const showForm = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
        showForm.get = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::show
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:62
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
        showForm.head = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::update
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:97
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
export const update = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/spatt-pararrayos/{spattPararrayo}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::update
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:97
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
update.url = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spattPararrayo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { spattPararrayo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    spattPararrayo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        spattPararrayo: typeof args.spattPararrayo === 'object'
                ? args.spattPararrayo.id
                : args.spattPararrayo,
                }

    return update.definition.url
            .replace('{spattPararrayo}', parsedArgs.spattPararrayo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::update
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:97
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
update.patch = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::update
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:97
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
    const updateForm = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::update
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:97
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
        updateForm.patch = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::destroy
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:116
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
export const destroy = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/spatt-pararrayos/{spattPararrayo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::destroy
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:116
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
destroy.url = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spattPararrayo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { spattPararrayo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    spattPararrayo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        spattPararrayo: typeof args.spattPararrayo === 'object'
                ? args.spattPararrayo.id
                : args.spattPararrayo,
                }

    return destroy.definition.url
            .replace('{spattPararrayo}', parsedArgs.spattPararrayo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::destroy
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:116
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
destroy.delete = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::destroy
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:116
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
    const destroyForm = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::destroy
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:116
 * @route '/spatt-pararrayos/{spattPararrayo}'
 */
        destroyForm.delete = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:161
 * @route '/spatt-pararrayos/{spattPararrayo}/enable-collab'
 */
export const enableCollaboration = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

enableCollaboration.definition = {
    methods: ["post"],
    url: '/spatt-pararrayos/{spattPararrayo}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:161
 * @route '/spatt-pararrayos/{spattPararrayo}/enable-collab'
 */
enableCollaboration.url = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spattPararrayo: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { spattPararrayo: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    spattPararrayo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        spattPararrayo: typeof args.spattPararrayo === 'object'
                ? args.spattPararrayo.id
                : args.spattPararrayo,
                }

    return enableCollaboration.definition.url
            .replace('{spattPararrayo}', parsedArgs.spattPararrayo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:161
 * @route '/spatt-pararrayos/{spattPararrayo}/enable-collab'
 */
enableCollaboration.post = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollaboration.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:161
 * @route '/spatt-pararrayos/{spattPararrayo}/enable-collab'
 */
    const enableCollaborationForm = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollaboration.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SpattPararrayoSpreadsheetController::enableCollaboration
 * @see app/Http/Controllers/SpattPararrayoSpreadsheetController.php:161
 * @route '/spatt-pararrayos/{spattPararrayo}/enable-collab'
 */
        enableCollaborationForm.post = (args: { spattPararrayo: number | { id: number } } | [spattPararrayo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollaboration.url(args, options),
            method: 'post',
        })
    
    enableCollaboration.form = enableCollaborationForm
const SpattPararrayoSpreadsheetController = { index, store, join, show, update, destroy, enableCollaboration }

export default SpattPararrayoSpreadsheetController