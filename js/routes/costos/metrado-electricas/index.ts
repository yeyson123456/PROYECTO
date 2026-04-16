import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import metrado from './metrado'
import resumen from './resumen'
/**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
export const index = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-electricas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
index.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
index.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
index.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
    const indexForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
        indexForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoElectricasController::index
 * @see app/Http/Controllers/MetradoElectricasController.php:19
 * @route '/costos/{costoProject}/metrado-electricas'
 */
        indexForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const metradoElectricas = {
    index: Object.assign(index, index),
metrado: Object.assign(metrado, metrado),
resumen: Object.assign(resumen, resumen),
}

export default metradoElectricas