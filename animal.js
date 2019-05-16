class Animal
{ constructor(voice="talk")
{ 
    this.voice=voice;
}
getVoice()
{ return this.voice;
}
setVoice(voice)
{
    this.voice=voice;
}
}
export{Animal};