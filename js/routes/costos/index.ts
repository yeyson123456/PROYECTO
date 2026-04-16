import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import module from './module'
import metradoArquitectura from './metrado-arquitectura'
import metradoEstructuras from './metrado-estructuras'
import metradoSanitarias from './metrado-sanitarias'
import metradoElectricas from './metrado-electricas'
import metradoComunicaciones from './metrado-comunicaciones'
import metradoGas from './metrado-gas'
import proyectos from './proyectos'
import ettp from './ettp'
/**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CostoProjectController::index
 * @see app/Http/Controllers/CostoProjectController.php:25
 * @route '/costos'
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
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/costos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CostoProjectController::create
 * @see app/Http/Controllers/CostoProjectController.php:51
 * @route '/costos/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
export const edit = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
edit.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
edit.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
edit.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
    const editForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
        editForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CostoProjectController::edit
 * @see app/Http/Controllers/CostoProjectController.php:242
 * @route '/costos/{costoProject}/edit'
 */
        editForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\CostoProjectController::store
 * @see app/Http/Controllers/CostoProjectController.php:61
 * @route '/costos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/costos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CostoProjectController::store
 * @see app/Http/Controllers/CostoProjectController.php:61
 * @route '/costos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::store
 * @see app/Http/Controllers/CostoProjectController.php:61
 * @route '/costos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::store
 * @see app/Http/Controllers/CostoProjectController.php:61
 * @route '/costos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::store
 * @see app/Http/Controllers/CostoProjectController.php:61
 * @route '/costos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
export const show = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
show.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
show.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
show.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
    const showForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
        showForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CostoProjectController::show
 * @see app/Http/Controllers/CostoProjectController.php:203
 * @route '/costos/{costoProject}'
 */
        showForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CostoProjectController::destroy
 * @see app/Http/Controllers/CostoProjectController.php:416
 * @route '/costos/{costoProject}'
 */
export const destroy = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/costos/{costoProject}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CostoProjectController::destroy
 * @see app/Http/Controllers/CostoProjectController.php:416
 * @route '/costos/{costoProject}'
 */
destroy.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::destroy
 * @see app/Http/Controllers/CostoProjectController.php:416
 * @route '/costos/{costoProject}'
 */
destroy.delete = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::destroy
 * @see app/Http/Controllers/CostoProjectController.php:416
 * @route '/costos/{costoProject}'
 */
    const destroyForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::destroy
 * @see app/Http/Controllers/CostoProjectController.php:416
 * @route '/costos/{costoProject}'
 */
        destroyForm.delete = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CostoProjectController::migrate
 * @see app/Http/Controllers/CostoProjectController.php:431
 * @route '/costos/{costoProject}/migrate'
 */
export const migrate = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: migrate.url(args, options),
    method: 'post',
})

migrate.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/migrate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CostoProjectController::migrate
 * @see app/Http/Controllers/CostoProjectController.php:431
 * @route '/costos/{costoProject}/migrate'
 */
migrate.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return migrate.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoProjectController::migrate
 * @see app/Http/Controllers/CostoProjectController.php:431
 * @route '/costos/{costoProject}/migrate'
 */
migrate.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: migrate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CostoProjectController::migrate
 * @see app/Http/Controllers/CostoProjectController.php:431
 * @route '/costos/{costoProject}/migrate'
 */
    const migrateForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: migrate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CostoProjectController::migrate
 * @see app/Http/Controllers/CostoProjectController.php:431
 * @route '/costos/{costoProject}/migrate'
 */
        migrateForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: migrate.url(args, options),
            method: 'post',
        })
    
    migrate.form = migrateForm
const costos = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
edit: Object.assign(edit, edit),
store: Object.assign(store, store),
show: Object.assign(show, show),
destroy: Object.assign(destroy, destroy),
migrate: Object.assign(migrate, migrate),
module: Object.assign(module, module),
metradoArquitectura: Object.assign(metradoArquitectura, metradoArquitectura),
metradoEstructuras: Object.assign(metradoEstructuras, metradoEstructuras),
metradoSanitarias: Object.assign(metradoSanitarias, metradoSanitarias),
metradoElectricas: Object.assign(metradoElectricas, metradoElectricas),
metradoComunicaciones: Object.assign(metradoComunicaciones, metradoComunicaciones),
metradoGas: Object.assign(metradoGas, metradoGas),
proyectos: Object.assign(proyectos, proyectos),
ettp: Object.assign(ettp, ettp),
}

export default costos