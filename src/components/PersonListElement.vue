<template>
  <div class="flex items-center">
    <profile-pic :initials="person.initials()" />
    <span class="ml-2 font-semibold">{{ person.fullName() }}</span>
  </div>
  <div class="">
    <font-awesome-icon icon="fa-phone" class="text-slate-400" size="sm" />
    {{ person.telephone }}
  </div>
</template>

<script>
import Person from '@/Person';
import ProfilePic from '@/components/ProfilePic.vue';

export default {
  name: 'PersonListElement',
  components: { ProfilePic },
  props: {
    person: {
      type: Person,
    },
  },
};
</script>

<style scoped>

</style>
