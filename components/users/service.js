import abstractService from '../../services/abstractService.js';

import users from './users.js'


class UserService extends abstractService {

    constructor(){
        super()
        const relations = {   
            include: [
                {
                
                   
                }
            ]
        }    

        this.setRelations()
        this.setModel(users)
        
    }

}

export default UserService;