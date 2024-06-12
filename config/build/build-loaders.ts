import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import path from "path";

export function buildLoaders({isDev, paths}: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    additionalData: paths.globalSCSS,
                    sassOptions: {
                        includePaths: [path.resolve(__dirname, 'src')]
                    },
                }
            },
        ],
    }

    const cssLoader = {
        test: /\.css/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    return [
        typescriptLoader,
        styleLoader,
        svgLoader,
        cssLoader
    ]
}