import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
export const eliminar = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eliminar.url(args, options),
    method: 'post',
})

eliminar.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/eliminar-huerfanas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
eliminar.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return eliminar.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
eliminar.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eliminar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
    const eliminarForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eliminar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
        eliminarForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eliminar.url(args, options),
            method: 'post',
        })
    
    eliminar.form = eliminarForm
const huerfanas = {
    eliminar: Object.assign(eliminar, eliminar),
}

export default huerfanas