import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
export const guardar = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: guardar.url(args, options),
    method: 'put',
})

guardar.definition = {
    methods: ["put"],
    url: '/costos/{costoProject}/ettp/partida/{partidaId}/secciones',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
guardar.url = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    partidaId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                partidaId: args.partidaId,
                }

    return guardar.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{partidaId}', parsedArgs.partidaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
guardar.put = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: guardar.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
    const guardarForm = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: guardar.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        guardarForm.put = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: guardar.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    guardar.form = guardarForm
const secciones = {
    guardar: Object.assign(guardar, guardar),
}

export default secciones