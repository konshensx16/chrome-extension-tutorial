#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>

int main()
{
	unsigned int length = 0;

	///////////////////////////////
	// read the first four bytes //
	///////////////////////////////
	for (int index = 0; index < 4; index++)
	{
		unsigned int read_char = getchar();
		length = length | (read_char << index*8);
	}

	////////////////////////////
	// DO WHATEVER YOU DESIRE //
	////////////////////////////

	/////////////////////////////////////////
	// read the message form the extension //
	/////////////////////////////////////////
	std::string message = "";
	for (int index = 0; index < length; index++)
	{
		message += getchar();
	}

	////////////////////////////////////////
	// collect the length of the message  //
	////////////////////////////////////////
	unsigned int len = message.length();

	////////////////////////////////////////////
	// send the 4 bytes of length information //
	////////////////////////////////////////////
	printf("%c%c%c%c",  (char) (len & 0xff),
						(char) (len << 8 & 0xff),
						(char) (len << 16 & 0xff),
						(char) (len << 24 & 0xff));
	
	/////////////////////////
	// output the message  //
	/////////////////////////
	printf("%s", message.c_str());

	return 0;
}