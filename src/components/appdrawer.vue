<template>
    <md-app-drawer :class="{ 'show': isOpen }" class="drawer" md-permanent="full">
        <div class="mask">
            <SearchBar />
            <div class="h3Bgc">
                <h3>案場</h3>
            </div>
            <section class="scrollableContent">
                <md-list class="drawerList">
                    <md-list-item v-for="(equipments, siteName) in data" :key="siteName" class="projectField">
                        <div class="projectTitle">
                            <span class="md-list-item-text fieldName">{{ siteName }}</span>
                            <div class="iconPostion">
                                <span class="material-symbols-outlined">arrow_drop_up</span>
                            </div>
                        </div>
                        <md-list class="drawerListItem">
                            <md-list-item v-for="(equipment, index) in equipments" :key="index" class="projectName">
                                <span class="md-list-item-text">{{ equipment }}</span>
                            </md-list-item>
                        </md-list>
                    </md-list-item>
                </md-list>
            </section>
        </div>
    </md-app-drawer>
</template>

<script>
import SearchBar from './searchbar.vue';
export default {
    name: 'AppDrawer',
    components: {
        SearchBar,
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {
            data: {
                A公司: ['案場1', '案場2', '案場3'],
                B公司: ['案場1', '案場2', '案場3'],
                C公司: ['案場1', '案場2', '案場3'],
                D公司: ['案場1', '案場2', '案場3'],
                E公司: ['案場1', '案場2', '案場3'],
                F公司: ['案場1', '案場2', '案場3'],
                G公司: ['案場1', '案場2', '案場3'],
                H公司: ['案場1', '案場2', '案場3'],
                I公司: ['案場1', '案場2', '案場3'],
                公司: ['案場1', '案場2', '案場3'],
            },
        };
    },

};
</script>

<style>
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/appdrawer.css);
</style>