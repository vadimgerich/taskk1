import Photo from "./model"

const photoControler = {
    //отримати всі
    
    async getByCountOfLikes(req,res){
        function makeQueryObject(query){
            let result = {};        
            if (query){
                result.countOfLikes = {"$gte":(query)};
            }   
            return result; 
        }
        try {
            const list = await Photo.find(makeQueryObject(req.params.countOfLikes));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    },
}

export default photoControler;