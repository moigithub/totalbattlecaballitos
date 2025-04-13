@startuml

skinparam backgroundColor #444444
skinparam handwritten true
skinparam activityFontColor white
skinparam activityBackgroundColor purple
skinparam activityFontSize 20
skinparam activityFontName Aapex

skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF

}

start
  if (have enemies alive?) then (<color:red>no)
    #darkorange:no enemies found;
    stop
  else (<color:red>yes)
    if (Are there enemies where I have FeatureBonus against them?) then (<color:red>yes)
      if (are they healthy enough, above my damage range?) then (<color:red>yes)
        if (have attacked yet?) then (<color:red>yes)
          #brown:return the biggest threat from the enemies who did not attacked yet;
        else (<color:red>no)
          #brown:return the biggest threat from the enemies with enough health;
        endif
        stop
      else (<color:red>no)
      endif
    else (<color:red>no)
    endif
    #brown:return the Biggest Threat from alive Enemies;
    stop
  endif

@enduml