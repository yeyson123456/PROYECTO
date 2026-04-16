import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
export const index = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
index.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                }

    return index.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
index.get = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
index.head = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
    const indexForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        indexForm.get = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::index
 * @see app/Http/Controllers/PresupuestoController.php:2661
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        indexForm.head = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PresupuestoController::store
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
export const store = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::store
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
store.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                }

    return store.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::store
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
store.post = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::store
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
    const storeForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::store
 * @see app/Http/Controllers/PresupuestoController.php:2679
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}'
 */
        storeForm.post = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
export const update = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
update.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                    id: args[3],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                                id: args.id,
                }

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
update.put = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
    const updateForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::update
 * @see app/Http/Controllers/PresupuestoController.php:2707
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
        updateForm.put = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PresupuestoController::destroy
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
export const destroy = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PresupuestoController::destroy
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
destroy.url = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    acuId: args[1],
                    tipo: args[2],
                    id: args[3],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                acuId: args.acuId,
                                tipo: args.tipo,
                                id: args.id,
                }

    return destroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{acuId}', parsedArgs.acuId.toString())
            .replace('{tipo}', parsedArgs.tipo.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::destroy
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
destroy.delete = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::destroy
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
    const destroyForm = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::destroy
 * @see app/Http/Controllers/PresupuestoController.php:2728
 * @route '/costos/proyectos/{project}/presupuesto/acus/{acuId}/componentes/{tipo}/{id}'
 */
        destroyForm.delete = (args: { project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number } | [project: number | { id: number }, acuId: string | number, tipo: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const componentes = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default componentes