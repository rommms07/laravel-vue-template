<template>
  <v-container>
    <v-row class="mt-1">
      <v-col 
        cols="12" 
        sm="4"
        lg="3" 
        md="4">

        <v-list nav class="rounded-lg" dense>
          <v-list-item>
            Hello, {{ }}
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="pa-0">
            <!-- Navigation bar -->
            <v-list width="100%">
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Shared Bookmark</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-amazon</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Amazon Wallet Hack</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-emoticon-sad</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Sad Section</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-key-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Credentials</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-list-item>
        </v-list>
        
      </v-col>
      <v-col 
        cols="12" 
        sm="8"
        lg="9" 
        md="8">
        
        <v-sheet elevation="3" class="pa-3 rounded-lg">
          <h2 class="font-weight-semi-bold mb-3">11 Strategies To Transfer Your Back Account Balance Into Your Afterlife Wallet</h2>
          <p>
            (1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fuga ullam error incidunt 
            reiciendis consequatur, illo necessitatibus dicta aut, voluptas eaque deserunt. Quisquam 
            molestiae temporibus odio rem doloribus praesentium provident?
          </p>
          <p>
            (2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fuga ullam error incidunt 
            reiciendis consequatur, illo necessitatibus dicta aut, voluptas eaque deserunt.
          </p>
          <blockquote class="font-weight-light font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>
        </v-sheet>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ComponentName extends Vue {

}
</script>

<style lang="postcss" scoped>

</style>
