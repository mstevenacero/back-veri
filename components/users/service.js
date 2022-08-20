import abstractService from '../../services/abstractService.js';

import users from './users.js'


//Relations
/*users.hasMany(counts,{    
    foreignKey: 'id_user'   
 })*/

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