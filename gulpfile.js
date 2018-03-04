'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const path = require('path');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

//TODO: factor this out into an npm package
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        console.log(generatedConfiguration)
        console.log('generated config', build.getConfig());
        Object.assign(generatedConfiguration.resolve, { extensions: ['.ts', '.js'] });
        generatedConfiguration.module.rules = [
            { test: /\.ts$/, loader: '@ngtools/webpack' },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: ['raw-loader', 'css-loader']
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ];
        generatedConfiguration.plugins.push(new AngularCompilerPlugin({
            tsConfigPath: path.resolve('./tsconfig.json')
        }))
        return generatedConfiguration;
    }
});


build.typescript.enabled = false;
build.tslint.enabled = false;

build.initialize(gulp);
