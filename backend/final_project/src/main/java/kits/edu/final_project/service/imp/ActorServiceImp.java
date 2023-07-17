package kits.edu.final_project.service.imp;

import kits.edu.final_project.entity.ActorEntity;

import java.util.List;

public interface ActorServiceImp {
    List<ActorEntity> getActor();
    ActorEntity addActor(ActorEntity actorEntity);
    ActorEntity replaceActorById(ActorEntity actorEntity,int id);
    List<ActorEntity> deleteActorById(int id);
}
