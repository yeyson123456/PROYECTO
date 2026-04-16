import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import metrado from './metrado'
import resumen from './resumen'
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/metrados/comunicaciones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::index
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:14
 * @route '/metrados/comunicaciones'
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
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::store
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:36
 * @route '/metrados/comunicaciones'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/metrados/comunicaciones',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::store
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:36
 * @route '/metrados/comunicaciones'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::store
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:36
 * @route '/metrados/comunicaciones'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::store
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:36
 * @route '/metrados/comunicaciones'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::store
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:36
 * @route '/metrados/comunicaciones'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::join
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:134
 * @route '/metrados/comunicaciones/join'
 */
export const join = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

join.definition = {
    methods: ["post"],
    url: '/metrados/comunicaciones/join',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::join
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:134
 * @route '/metrados/comunicaciones/join'
 */
join.url = (options?: RouteQueryOptions) => {
    return join.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::join
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:134
 * @route '/metrados/comunicaciones/join'
 */
join.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: join.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::join
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:134
 * @route '/metrados/comunicaciones/join'
 */
    const joinForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: join.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::join
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:134
 * @route '/metrados/comunicaciones/join'
 */
        joinForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: join.url(options),
            method: 'post',
        })
    
    join.form = joinForm
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
export const show = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/metrados/comunicaciones/{metradosComunicacion}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
show.url = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosComunicacion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosComunicacion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosComunicacion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosComunicacion: typeof args.metradosComunicacion === 'object'
                ? args.metradosComunicacion.id
                : args.metradosComunicacion,
                }

    return show.definition.url
            .replace('{metradosComunicacion}', parsedArgs.metradosComunicacion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
show.get = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
show.head = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
    const showForm = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
        showForm.get = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::show
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:53
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
        showForm.head = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:83
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
export const update = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/metrados/comunicaciones/{metradosComunicacion}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:83
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
update.url = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosComunicacion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosComunicacion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosComunicacion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosComunicacion: typeof args.metradosComunicacion === 'object'
                ? args.metradosComunicacion.id
                : args.metradosComunicacion,
                }

    return update.definition.url
            .replace('{metradosComunicacion}', parsedArgs.metradosComunicacion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:83
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
update.patch = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:83
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
    const updateForm = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:83
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
        updateForm.patch = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:125
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
export const destroy = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/metrados/comunicaciones/{metradosComunicacion}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:125
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
destroy.url = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosComunicacion: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosComunicacion: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosComunicacion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosComunicacion: typeof args.metradosComunicacion === 'object'
                ? args.metradosComunicacion.id
                : args.metradosComunicacion,
                }

    return destroy.definition.url
            .replace('{metradosComunicacion}', parsedArgs.metradosComunicacion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:125
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
destroy.delete = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:125
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
    const destroyForm = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::destroy
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:125
 * @route '/metrados/comunicaciones/{metradosComunicacion}'
 */
        destroyForm.delete = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::enableCollab
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:0
 * @route '/metrados/comunicaciones/{metradosComunicacion}/enable-collab'
 */
export const enableCollab = (args: { metradosComunicacion: string | number } | [metradosComunicacion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

enableCollab.definition = {
    methods: ["post"],
    url: '/metrados/comunicaciones/{metradosComunicacion}/enable-collab',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::enableCollab
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:0
 * @route '/metrados/comunicaciones/{metradosComunicacion}/enable-collab'
 */
enableCollab.url = (args: { metradosComunicacion: string | number } | [metradosComunicacion: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosComunicacion: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    metradosComunicacion: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosComunicacion: args.metradosComunicacion,
                }

    return enableCollab.definition.url
            .replace('{metradosComunicacion}', parsedArgs.metradosComunicacion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::enableCollab
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:0
 * @route '/metrados/comunicaciones/{metradosComunicacion}/enable-collab'
 */
enableCollab.post = (args: { metradosComunicacion: string | number } | [metradosComunicacion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableCollab.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::enableCollab
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:0
 * @route '/metrados/comunicaciones/{metradosComunicacion}/enable-collab'
 */
    const enableCollabForm = (args: { metradosComunicacion: string | number } | [metradosComunicacion: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableCollab.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::enableCollab
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:0
 * @route '/metrados/comunicaciones/{metradosComunicacion}/enable-collab'
 */
        enableCollabForm.post = (args: { metradosComunicacion: string | number } | [metradosComunicacion: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableCollab.url(args, options),
            method: 'post',
        })
    
    enableCollab.form = enableCollabForm
const comunicaciones = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
join: Object.assign(join, join),
show: Object.assign(show, show),
update: Object.assign(update, update),
metrado: Object.assign(metrado, metrado),
resumen: Object.assign(resumen, resumen),
destroy: Object.assign(destroy, destroy),
enableCollab: Object.assign(enableCollab, enableCollab),
}

export default comunicaciones