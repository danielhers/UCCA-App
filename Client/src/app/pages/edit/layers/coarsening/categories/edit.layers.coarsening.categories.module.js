/* Copyright (C) 2017 Omri Abend, The Rachel and Selim Benin School of Computer Science and Engineering, The Hebrew University. */
(function () {
    'use strict';

    angular.module('zAdmin.pages.edit.layers.coarsening.categories', [

    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('edit.layers.coarsening.categories', {
                url: '/categories',
                template: '<ui-view></ui-view>',
                title: 'Edit Coarsening Layer',
                abstract:true,
                controllerAs: 'vm',
                resolve:{
                    EditTableStructure:function(editCoarseningLayerCategoriesService){
                        return editCoarseningLayerCategoriesService.getEditTableStructure()
                    },
                    EditTableData:function(editCoarseningLayerCategoriesService){
                        return editCoarseningLayerCategoriesService.getTableData()
                    }
                }
            })
            .state('edit.layers.coarsening.categories.manage', {
                url: '/categories',
                templateUrl: 'app/pages/edit/layers/coarsening/categories/edit.layers.coarsening.categories.html',
                title: 'Edit Coarsening Layer',
                controller: 'EditCoarseningLayerCategoriesCtrl',
                controllerAs: 'vm',
                params:{
                    parentId: null,
                },
                resolve:{
                    EditTableStructure:function(editCoarseningLayerCategoriesService){
                        return editCoarseningLayerCategoriesService.getEditTableStructure()
                    },
                    parentCategoriesSmartTableData: function(editCoarseningLayerCategoriesService,storageService,$stateParams){
                        var searchTerms = [{'searchKey': 'id', 'searchValue': $stateParams.parentId}];
                        return editCoarseningLayerCategoriesService.getParentCategoriesTableData(searchTerms)
                    }
                }
            })
            .state('edit.layers.coarsening.categories.create', {
                url: '/newctegories',
                templateUrl: 'app/pages/edit/layers/coarsening/categories/edit.layers.coarsening.categories.create.html',
                title: 'Edit Coarsening Layer',
                controller: 'EditCategoriesCtrl',
                controllerAs: 'vm',
                resolve:{
                    EditTableStructure:function(editCategoriesService){
                        return editCategoriesService.getEditTableStructure()
                    }
                }
            })
        ;
    }

})();