
import { Vue } from 'vue-property-decorator';
import { upperFirst, camelCase } from 'lodash';

const requireComponent = require.context('.', false, /V[A-Z]\w+\.(vue)$/);

for (const filename of requireComponent.keys()) {
  const config = requireComponent(filename);
  const name = upperFirst(
    camelCase(
      filename.split('/').pop()?.replace(/\.\w+$/, '')
    )
  );

  /** Register */
  Vue.component(name, config.default || config);
}