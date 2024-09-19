<template>
    <div>
        <div class="searchBar">
            <div class="leadingIcon">
                <span class="material-symbols-outlined">search</span>
            </div>
            <input type="text" v-model="searchQuery" placeholder="查詢案場" class="search-input" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        performSearch() {
            console.log('Searching for:', this.searchQuery);
            // Implement your search logic here
        },
    },
};
</script>

<style >
.searchBar {
    max-width: 200px;
    display: flex;
    height: 40px;
    justify-content: center; 
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 28px;
    padding: 0px 4px;
    background-color: var(--md-sys-color-surface-dim);
}

.leadingIcon {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;

}

.leadingIcon>span.material-symbols-outlined{
    color:var(--md-sys-color-primary) ;
}
.search-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 24px;
    font-size: 16px;
}


</style>