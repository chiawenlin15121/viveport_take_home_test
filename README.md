# Taipei Parks

The park walks through the basic information of the park in Taipei Xinhuayang website.

# Table of Contents
  * [Features](#features)
  * [Build Setup](#build-setup)
  * [專案設計邏輯](#project-structure)
  * [專案遇到的問題](#problems)


## Features
- [x] Park list page
- [x] RWD
- [x] Pagination
- [x] Search by park name
- [x] Park detail page
- [x] OpenStreetMap

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

## Project Structure
### 1.整體架構
#### 主要有兩個頁面
    1. DataListPage
    2. ParkDetailPage
#### 三個Components
    1. SearchBar
    2. DataList
    3. ListCard
#### 一個 Helper
    Map.js // OpenStreetMap Adapter
### 2.狀態管理
使用`vuex`管理所有公園資料
### 3.頁面切換
使用`vue-router`處理導覽相關功能
> `/parks?p=&s=` 列表出篩選且分頁過後的資料
> p = 第幾頁
> s = 關鍵字

>`/parks/:parkId` 公園詳細資料

## Problems
### 1.ESLint 版本
在導入eslint後發現每個檔案開頭都會報錯
錯誤訊息為`Definition for rule 'vue/script-setup-uses-vars' was not found`
後來發現是eslint版本7.0.0以上加入了vue3的規則偵測
在降版後就沒問題了


