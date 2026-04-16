import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:116
 * @route '/metrados/comunicaciones/{metradosComunicacion}/resumen'
 */
export const update = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/metrados/comunicaciones/{metradosComunicacion}/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:116
 * @route '/metrados/comunicaciones/{metradosComunicacion}/resumen'
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
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:116
 * @route '/metrados/comunicaciones/{metradosComunicacion}/resumen'
 */
update.patch = (args: { metradosComunicacion: number | { id: number } } | [metradosComunicacion: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionSpreadsheetController::update
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:116
 * @route '/metrados/comunicaciones/{metradosComunicacion}/resumen'
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
 * @see app/Http/Controllers/MetradoComunicacionSpreadsheetController.php:116
 * @route '/metrados/comunicaciones/{metradosComunicacion}/resumen'
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
const resumen = {
    update: Object.assign(update, update),
}

export default resumen