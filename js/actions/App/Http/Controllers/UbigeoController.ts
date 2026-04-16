import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
export const departamentos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departamentos.url(options),
    method: 'get',
})

departamentos.definition = {
    methods: ["get","head"],
    url: '/api/ubigeo/departamentos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
departamentos.url = (options?: RouteQueryOptions) => {
    return departamentos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
departamentos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departamentos.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
departamentos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departamentos.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
    const departamentosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: departamentos.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
        departamentosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departamentos.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UbigeoController::departamentos
 * @see app/Http/Controllers/UbigeoController.php:13
 * @route '/api/ubigeo/departamentos'
 */
        departamentosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: departamentos.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    departamentos.form = departamentosForm
/**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
export const provincias = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provincias.url(args, options),
    method: 'get',
})

provincias.definition = {
    methods: ["get","head"],
    url: '/api/ubigeo/provincias/{departamento}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
provincias.url = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { departamento: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    departamento: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        departamento: args.departamento,
                }

    return provincias.definition.url
            .replace('{departamento}', parsedArgs.departamento.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
provincias.get = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: provincias.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
provincias.head = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: provincias.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
    const provinciasForm = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: provincias.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
        provinciasForm.get = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: provincias.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UbigeoController::provincias
 * @see app/Http/Controllers/UbigeoController.php:26
 * @route '/api/ubigeo/provincias/{departamento}'
 */
        provinciasForm.head = (args: { departamento: string | number } | [departamento: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: provincias.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    provincias.form = provinciasForm
/**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
export const distritos = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: distritos.url(args, options),
    method: 'get',
})

distritos.definition = {
    methods: ["get","head"],
    url: '/api/ubigeo/distritos/{provincia}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
distritos.url = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provincia: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    provincia: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        provincia: args.provincia,
                }

    return distritos.definition.url
            .replace('{provincia}', parsedArgs.provincia.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
distritos.get = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: distritos.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
distritos.head = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: distritos.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
    const distritosForm = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: distritos.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
        distritosForm.get = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: distritos.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UbigeoController::distritos
 * @see app/Http/Controllers/UbigeoController.php:39
 * @route '/api/ubigeo/distritos/{provincia}'
 */
        distritosForm.head = (args: { provincia: string | number } | [provincia: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: distritos.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    distritos.form = distritosForm
const UbigeoController = { departamentos, provincias, distritos }

export default UbigeoController