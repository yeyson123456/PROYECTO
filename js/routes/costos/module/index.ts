import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
export const show = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/module/{moduleType}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
show.url = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduleType: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduleType: args.moduleType,
                }

    return show.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduleType}', parsedArgs.moduleType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
show.get = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
show.head = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
    const showForm = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
        showForm.get = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CostoModuleController::show
 * @see app/Http/Controllers/CostoModuleController.php:80
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
        showForm.head = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\CostoModuleController::update
 * @see app/Http/Controllers/CostoModuleController.php:146
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
export const update = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/module/{moduleType}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\CostoModuleController::update
 * @see app/Http/Controllers/CostoModuleController.php:146
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
update.url = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduleType: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduleType: args.moduleType,
                }

    return update.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduleType}', parsedArgs.moduleType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CostoModuleController::update
 * @see app/Http/Controllers/CostoModuleController.php:146
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
update.patch = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CostoModuleController::update
 * @see app/Http/Controllers/CostoModuleController.php:146
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
    const updateForm = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CostoModuleController::update
 * @see app/Http/Controllers/CostoModuleController.php:146
 * @route '/costos/{costoProject}/module/{moduleType}'
 */
        updateForm.patch = (args: { costoProject: number | { id: number }, moduleType: string | number } | [costoProject: number | { id: number }, moduleType: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const module = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default module