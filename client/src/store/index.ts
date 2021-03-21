import Vuex from 'vuex';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module
export class MainStore extends VuexModule {
  public progressBarShow = false;

  @Mutation
  public setProgressBarState(): void {
    this.progressBarShow = !this.progressBarShow;
  }

  @Action
  public toggleProgressBar(): void {
    this.context.commit('setProgressBarState');
  }

}

export default new Vuex.Store(MainStore);