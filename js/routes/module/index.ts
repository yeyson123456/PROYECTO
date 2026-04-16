import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
export const etts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: etts.url(options),
    method: 'get',
})

etts.definition = {
    methods: ["get","head"],
    url: '/module/etts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
etts.url = (options?: RouteQueryOptions) => {
    return etts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
etts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: etts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
etts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: etts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
    const ettsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: etts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
        ettsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: etts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:312
 * @route '/module/etts'
 */
        ettsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: etts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    etts.form = ettsForm
const module = {
    etts: Object.assign(etts, etts),
}

export default module