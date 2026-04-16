import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
export const update = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/metrados/electricas/{metradosElectrica}/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
update.url = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metradosElectrica: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { metradosElectrica: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    metradosElectrica: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        metradosElectrica: typeof args.metradosElectrica === 'object'
                ? args.metradosElectrica.id
                : args.metradosElectrica,
                }

    return update.definition.url
            .replace('{metradosElectrica}', parsedArgs.metradosElectrica.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
update.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
    const updateForm = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasSpreadsheetController::update
 * @see app/Http/Controllers/MetradoElectricasSpreadsheetController.php:97
 * @route '/metrados/electricas/{metradosElectrica}/resumen'
 */
        updateForm.patch = (args: { metradosElectrica: number | { id: number } } | [metradosElectrica: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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