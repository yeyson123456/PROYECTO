import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EttpController::subir
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
export const subir = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subir.url(args, options),
    method: 'post',
})

subir.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/seccion/{id}/imagen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::subir
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
subir.url = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                id: args.id,
                }

    return subir.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::subir
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
subir.post = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subir.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::subir
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
    const subirForm = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: subir.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::subir
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
        subirForm.post = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: subir.url(args, options),
            method: 'post',
        })
    
    subir.form = subirForm
/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
export const eliminar = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminar.url(args, options),
    method: 'delete',
})

eliminar.definition = {
    methods: ["delete"],
    url: '/costos/{costoProject}/ettp/imagen/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
eliminar.url = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                id: args.id,
                }

    return eliminar.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
eliminar.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminar.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
    const eliminarForm = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eliminar.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::eliminar
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
        eliminarForm.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eliminar.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    eliminar.form = eliminarForm
const imagen = {
    subir: Object.assign(subir, subir),
eliminar: Object.assign(eliminar, eliminar),
}

export default imagen