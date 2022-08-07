import selectors from '../constants/selectors';
import { routes } from '../constants/url';

// refactor whole test, find solution for mobile view problem
describe('Home page is reachable', () => {
    it('visits website', () => {
        cy.visit(routes.home);
            {
                headers: {
                    'user-agent':
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
                };
            };
    });
});
