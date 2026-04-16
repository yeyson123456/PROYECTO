import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import componentes from './componentes'
/**
* @see \App\Http\Controllers\PresupuestoController::calculate
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
export const calculate = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculate.url(args, options),
    method: 'post',
})

calculate.definition = {
    methods: ["post"],
    url: '/costos/proyectos/{project}/presupuesto/acus/calculate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PresupuestoController::calculate
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
calculate.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return calculate.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::calculate
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
calculate.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: calculate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::calculate
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
    const calculateForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: calculate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::calculate
 * @see app/Http/Controllers/PresupuestoController.php:845
 * @route '/costos/proyectos/{project}/presupuesto/acus/calculate'
 */
        calculateForm.post = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: calculate.url(args, options),
            method: 'post',
        })
    
    calculate.form = calculateForm
const acus = {
    calculate: Object.assign(calculate, calculate),
componentes: Object.assign(componentes, componentes),
}

export default acus