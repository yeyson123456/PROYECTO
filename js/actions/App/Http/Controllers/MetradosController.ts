import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/metrados',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradosController::index
 * @see app/Http/Controllers/MetradosController.php:15
 * @route '/metrados'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const MetradosController = { index }

export default MetradosController