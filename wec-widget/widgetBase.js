module.exports = {
    props: ['contextPath'],
    data () {
        return {
            routes: {}
        };
    },
    methods: {
        l (path) {
            return (this.contextPath + path).replace(/\/\//g, '/');
        }
    },
    activate (done) {
        this.$dispatch('widget-active', this.routes);
        done();
    }
};
