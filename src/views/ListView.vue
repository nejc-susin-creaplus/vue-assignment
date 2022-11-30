<template>
  <div class="">
    <div class="h-12 bg-neutral-100 flex items-center border-b px-5">
      <label for="search">Search:</label>
      <input id="search" v-model="searchQuery" type="text" class="w-full ml-2 text-lg text-slate-400 border focus:outline-0">
    </div>
    <div
      v-for="person in filteredPersons" :key="person.id"
      class="flex justify-between items-center px-5 h-12 leading-none text-lg even:bg-neutral-100 hover:bg-slate-200 cursor-pointer"
    >
      <person-list-element :person="person" />
    </div>
  </div>
</template>

<script>
import PersonListElement from '@/components/PersonListElement.vue';
import Person from '@/Person';
import apiService from '@/services/api.service';

export default {
  name: 'MainView',
  components: { PersonListElement },

  data() {
    return {
      persons: [],
      searchQuery: '',
    };
  },

  computed: {
    filteredPersons() {
      return this.persons.filter((p) => p.fullName().toLowerCase().includes(this.searchQuery.toLowerCase()) || p.telephone.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },

  created() {
    apiService.get('/persons').then((response) => {
      this.persons = response.data.map((p) => new Person(p));
    });
  },
};
</script>

<style scoped></style>
