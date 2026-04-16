import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import desagregado from './desagregado'
/**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
export const totals = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: totals.url(args, options),
    method: 'get',
})

totals.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
totals.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { project: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                }

    return totals.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
totals.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: totals.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
totals.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: totals.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
    const totalsForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: totals.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
        totalsForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: totals.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::totals
 * @see app/Http/Controllers/PresupuestoController.php:1285
 * @route '/costos/proyectos/{project}/presupuesto/gastos-fijos-global/totals'
 */
        totalsForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: totals.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    totals.form = totalsForm
const gastosFijosGlobal = {
    totals: Object.assign(totals, totals),
desagregado: Object.assign(desagregado, desagregado),
}

export default gastosFijosGlobal