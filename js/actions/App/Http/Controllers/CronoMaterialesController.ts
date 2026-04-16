import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/module/crono_materiales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CronoMaterialesController::index
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
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
const CronoMaterialesController = { index }

export default CronoMaterialesController