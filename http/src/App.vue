<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="user.username">
                </div>
                 <div class="form-group">
                    <label for="mail">Mail</label>
                    <input type="email" class="form-control" id="mail" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>  
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username}} - {{ u.email }}</li>
                </ul>  
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                // locally the link to your database goes between the ''
                // this.$http.post('data.json', this.user)// .json is important
                //     .then(response => {
                //         console.log(response);
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     });
                // this.resource.save({}, this.user); // save() is from vue-resource package
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json();                   
                //     })
                //     .then(data => {
                //         const resultArray = [];
                //         for (let key in data) {
                //             resultArray.push(data[key]);
                //         }
                //         this.users = resultArray;
                //     })
                //     .catch(err => console.log(err));
                this.resource.getData({node: this.node})
                    .then(response => {
                            return response.json();                   
                        })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {
            // Here we are customizing our http, giving us more flexability
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
