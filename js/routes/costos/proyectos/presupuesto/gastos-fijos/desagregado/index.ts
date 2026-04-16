import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
export const show = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
show.url = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    ggFijoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                ggFijoId: args.ggFijoId,
                }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ggFijoId}', parsedArgs.ggFijoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
show.get = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
show.head = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
    const showForm = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        showForm.get = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:1116
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        showForm.head = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
export const save = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

save.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
save.url = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                    ggFijoId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                                ggFijoId: args.ggFijoId,
                }

    return save.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace('{ggFijoId}', parsedArgs.ggFijoId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
save.post = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
    const saveForm = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: save.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:1166
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos/{ggFijoId}/desagregado'
 */
        saveForm.post = (args: { project: number | { id: number }, ggFijoId: string | number } | [project: number | { id: number }, ggFijoId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: save.url(args, options),
            method: 'post',
        })
    
    save.form = saveForm
const desagregado = {
    show: Object.assign(show, show),
save: Object.assign(save, save),
}

export default desagregado