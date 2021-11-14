export default {
    template: `
        <div class="mail-filter">
            <label>Search</label>
            <input @input="filter" v-model="filterBy.from" type="text" placeholder="Search...">
        </div>
    `,
    data() {
        return {
            filterBy: {
                from: '',
                
            }
        };
    },
    methods: {
        filter() {
            console.log('filtered', { ...this.filterBy })
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}