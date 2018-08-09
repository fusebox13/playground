import { expect } from "chai";
import sinon from "sinon";
import {getters, mutations, actions} from '@/testModule';
import * as Api from '@/Api'; // <--- Magic!

const sandbox = sinon.createSandbox();

describe('Mutations', () => {
    it('INCRMENTS', () => {
        const { INCREMENT } = mutations;
        const mockState = {
            COUNT: 0
        };
        INCREMENT(mockState);
        expect(mockState.COUNT).to.equal(1);
    })
});

describe('Getters', () => {
    it('GETS A DOUBLED COUNT', () => {
        const { GET_DOUBLED_COUNT } = getters;
        const mockState = {
            COUNT: 1
        };
        const doubledCount = GET_DOUBLED_COUNT(mockState);
        expect(doubledCount).to.equal(2);

    })
});

describe('Actions', () => {
    let apiMock;
    beforeEach(() => {
         apiMock = sandbox.mock(Api);
    });

    afterEach(() => {
        sandbox.restore();
   });

    /**
     * HAPPY PATH
     */
    it('GET PHOTOS AND UPDATES THE STORE', async () => {
        apiMock
            .expects('getPhotos')
            .once()
            .resolves('hello world!');
            
        let commit = sandbox.spy();
        await actions.LOAD_PHOTOS({commit});
        expect(commit.args).to.deep.equal([ 
            [ 'UPDATE_PHOTOS', 'hello world!' ] 
        ]);
    });

    /**
     * SAD PATH
     */
    it('UPDATES THE GET_PHOTOS_ERROR WHEN THE API CALL FAILS', async () => {
        apiMock
            .expects('getPhotos')
            .once()
            .rejects('YOU BROKE IT');
            
        let commit = sandbox.spy();
        await actions.LOAD_PHOTOS({commit});
        expect(commit.args).to.deep.equal([ 
            [ 'UPDATE_GET_PHOTOS_ERROR', 'YOU BROKE IT' ] 
        ]);
        
    });
});